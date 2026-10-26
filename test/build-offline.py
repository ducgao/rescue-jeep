import re, sys
html = open('public/index.html', encoding='utf-8').read()
js = open('dist/offline.js', encoding='utf-8').read().replace('</script', '<\\/script')
head = re.search(r'<head>(.*?)</head>', html, re.S).group(1)
body = re.search(r'<body>(.*?)</body>', html, re.S).group(1)
head = re.sub(r'<meta charset[^>]*>\s*|<meta name="viewport"[^>]*>\s*|<title>.*?</title>\s*', '', head)
body = re.sub(r'<script type="importmap">.*?</script>\s*', '', body, flags=re.S)
body = body.replace('<script type="module" src="/js/main.js"></script>', '<script>\n' + js + '\n</script>')
frag = '<title>Rescue Jeep</title>\n' + head.strip() + '\n' + body.strip() + '\n'
open('dist/rescue-jeep-offline.artifact.html', 'w', encoding='utf-8').write(frag)
full = '<!doctype html>\n<html lang="vi">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">\n' + frag.split('</style>')[0] + '</style>\n</head>\n<body>\n' + frag.split('</style>',1)[1] + '</body>\n</html>\n'
open('dist/rescue-jeep-offline.html', 'w', encoding='utf-8').write(full)
print(len(frag), len(full))
