from bs4 import BeautifulSoup
from pathlib import Path
html=Path('tmp_fetch.html').read_text(encoding='utf-8', errors='ignore')
soup=BeautifulSoup(html,'html.parser')
text=soup.get_text()
print(text[:2000])
