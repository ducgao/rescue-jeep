# Rescue Jeep

Game co-op 2 người, chạy trên web, kiểu Jackal (NES). Chơi trên điện thoại cầm ngang: kéo nửa trái màn hình để lái, giữ nửa phải để bắn. Có màn tập lái trước màn 1: camera đứng yên một khu, người chơi làm lần lượt 3 bài (lái xe qua 3 vòng sáng, bắn 3 mục tiêu ở 3 hướng khác nhau với tia chỉ hướng đầu xe, cứu tù binh về trực thăng).
Vào game sẽ tìm đồng đội trong 10 giây, hết giờ không có ai thì chơi cùng BOT.

## Chạy
```bash
npm install
npm start               # http://localhost:8080  (PORT=xxxx để đổi cổng)
```
Mở trên 2 máy (hoặc 2 tab) để chơi cùng nhau. Chỉ có 1 người thì sau 10 giây BOT sẽ vào.
Máy tính: phím mũi tên / WASD để lái, Space / J để bắn. Điện thoại (cầm ngang): kéo nửa trái để lái, giữ nửa phải để bắn.

Lệnh cho dev:
- `npm run sim` — cho bot với bot tự chơi hết 3 màn (headless) để cân bằng độ khó
- `node test/tutorial.js` — chạy thử hết màn tập lái bằng script
- `RJ_STAGE=2 RJ_START_Y=700 npm start` — vào thẳng màn 2, ngay trước boss (bản offline dùng `?stage=2&start=700`)
- `?server=wss://host/ws` — client nối tới một server khác

## Kiến trúc
- `shared/`: các hằng số, layout màn chơi, va chạm và di chuyển. Client và server dùng chung code này nên phần dự đoán phía client khớp với server.
- `server/index.js`: một port duy nhất, vừa phục vụ file tĩnh vừa chạy WebSocket `/ws`. Ghép cặp: người tới sau ghép ngay với người đang chờ, chờ đủ 10 giây thì ghép với BOT. Có heartbeat 15 giây.
- `server/room.js`: mô phỏng phía server (server-authoritative) ở 30 tick/giây, gửi snapshot JSON 15 lần/giây. Khi một người mất kết nối thì BOT lái thay xe của người đó.
- `server/bot.js`: bot lái theo steering. Thứ tự ưu tiên: chở tù binh về trực thăng > nhặt tù binh > đánh mục tiêu cứng hoặc đi theo đồng đội. Bot có né đạn, tìm đường qua cầu và lách vật cản.
- `public/`: 4 theme đồ hoạ chọn ở menu: SNES (`render.js`, pixel art vẽ trên buffer 360×240 rồi phóng to), NES 8-bit (ảnh SNES được ép về bảng 27 màu kiểu NES), 3D (`render3d.js`, three.js r149: ánh nắng, bóng đổ, toon shading, camera ortho nghiêng khớp toạ độ 2D) và Vẽ tay trên giấy (`render-hand.js`). Sprite vẽ bằng code, âm thanh tổng hợp bằng WebAudio, joystick ảo nổi.
  Client dự đoán vị trí xe của mình (lưu input theo seq, server ack lại thì chạy lại các input chưa ack), còn các đối tượng khác thì nội suy với độ trễ 110ms.

## Gameplay
- Xe bắn liên tục theo hướng đầu xe, không tự ngắm, nên muốn bắn đâu thì quay đầu xe về đó. Đạn cấp 1 yếu: lính trúng 1 phát là chết, tháp pháo, xe tăng, trại giam và boss thì phải bắn nhiều phát.
- Cấp súng giữ nguyên cho tới khi chết, chết thì về lại cấp 1: L1 đạn nhỏ → L2 đạn to → L3 2 nòng → L4 3 tia → L5 3 tia + đạn nổ → L6 4 tia + laser xuyên. Lên cấp bằng cách: cứu đủ 5 tù binh (chở về trực thăng) thì +1 cấp, nhặt tù binh nhấp nháy vàng, hoặc nhặt item W.
- Item rơi từ địch: R bắn nhanh hơn (cộng dồn tối đa 3 lần, mất khi chết), P khiên (8 giây), ♥ +1 mạng (tối đa 5), B bom xoá đạn và gây sát thương cả màn hình, W lên cấp súng.
- Nhạc nền chiptune tổng hợp bằng WebAudio: mỗi màn một bài, boss có bài riêng.
- 3 màn: Đồng cỏ (dễ) → Sa mạc (boss chiến xa) → Căn cứ tuyết (khó, boss pháo đài 6 tháp). Qua màn được +1 mạng và thưởng điểm.
- Mỗi xe chở tối đa 8 tù binh. Chở về trực thăng được +100 điểm/người. Cán lính bằng xe cũng được.
- Boss: phá hết 4 tháp pháo thì khiên tắt, sau đó mới bắn được lõi.
- Mỗi người 3 mạng. Hết mạng thì bấm "Xin 1 mạng từ đồng đội": đồng đội có từ 2 mạng trở lên sẽ thấy hộp Cho/Không (10 giây, BOT luôn cho). Cả 2 hết mạng thì thua.

## Deploy lên Render (miễn phí, có link https)
1. Tạo repo trên GitHub (ví dụ `rescue-jeep`), rồi đẩy code lên:
   ```
   git init && git add . && git commit -m "Rescue Jeep"
   git branch -M main
   git remote add origin https://github.com/<user>/rescue-jeep.git
   git push -u origin main
   ```
2. Vào https://dashboard.render.com, đăng nhập bằng GitHub, chọn **New → Blueprint**, rồi chọn repo vừa tạo. Render sẽ đọc `render.yaml` (Node 20, region Singapore, gói free).
3. Bấm **Apply** và chờ khoảng 2 phút. Bạn sẽ có link dạng `https://rescue-jeep-xxxx.onrender.com`. Gửi link này cho bạn bè: 2 người vào trong vòng 10 giây sẽ được ghép cặp. Client tự kết nối tới `wss://<host>/ws`.

Lưu ý về gói free: server sẽ ngủ sau 15 phút không có ai chơi, lần mở đầu tiên sau đó mất khoảng 30–50 giây. Muốn chạy liên tục thì nâng lên gói Starter.

Chỗ khác: chạy được ở mọi nơi có Node 18 trở lên (Railway, Fly.io, VPS…), hoặc dùng `Dockerfile` (PORT 8080). Nếu đặt sau reverse proxy thì nhớ bật WebSocket upgrade cho `/ws`.
