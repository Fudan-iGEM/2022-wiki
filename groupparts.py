from bs4 import BeautifulSoup
import os

# os.system('scrapy fetch --nolog http://parts.igem.org/cgi/partsdb/part_info.cgi?part_name=BBa_K4162003 > 003.txt') # cannot ajax sequence length
from selenium import webdriver
#options = webdriver.ChromeOptions();
#options.add_argument('headless'); # headless cannot sleep
driver = webdriver.Chrome() # https://chromedriver.chromium.org/downloads and place it into /usr/local/bin
# driver.get("http://parts.igem.org/cgi/partsdb/part_info.cgi?part_name=BBa_K4162003")
# print( driver.page_source )
from time import sleep


z = range(1, 37)
table_th = ('Part Name', 'Short Description', 'Part Type', 'Designer(s)')
fff = open('groupparts.md', 'w')
fff.write('|----|----|----|----|----|----|----|\n')
fff.write('| | | Part Name | Description | Part Type | Designer(s) | Length |\n')
fff.write('|----|----|----|----|----|----|----|\n')

for zz in z:
    part_name = 'BBa_K4162%s' % str(zz).zfill(3)
    if not os.path.isfile('parts-html/%s.txt' % part_name):
        print('init:\t', part_name)
        driver.get("http://parts.igem.org/cgi/partsdb/part_info.cgi?part_name=%s" % part_name)
        sleep(10)
        p1 = BeautifulSoup(driver.page_source, features="lxml")
        p2 = p1.find_all('table', {'id' : 'table_header'})
        if p2:
            f = open('parts-html/%s.txt' % part_name, 'w')
            f.write(driver.page_source)
            f.close()
        else:
            print('!! empty\n')
            continue
    else:
        print('load:\t', part_name)
        ff = open('parts-html/%s.txt' % part_name, 'r')
        page = ff.read()
        ff.close()
        p1 = BeautifulSoup(page, features="lxml")
        p2 = p1.find_all('table', {'id' : 'table_header'})
    p3 = p1.find('span', {'class': 'SnF_partSeqLength legend'}).get_text().strip()
    print(p3)
    p4 = p1.find('div', {'class': 'compatibility_div'}).get_text().find('COMPATIBLE WITH RFC[10]') > -1
    print('RFC[10]', p4)
    td = []
    favorited = ''
    for tr in p2:
        started = False
        tr_text = tr.get_text(" |\t", strip=True)
        for th in table_th:
            if tr_text.startswith('%s |' % th):
                td.append(tr_text.split(' |\t', 1)[1].strip() )
                print(th, td[-1] )
        if tr_text.startswith('DNA Status') and not started:
            if tr_text.find('Deleted') > -1:
                fff.write('| Deleted ')
            else:
                fff.write('| ')
            started = True
        if tr_text.startswith('Group Favorite') and tr_text.find('Yes') > -1:
            favorited = 'U'
    fff.write('| %s | %s | %s | \n' % (favorited, ' | '.join(td), p3) )
    print('\n\n')

fff.write('|----|----|----|----|----|----|----|\n')
fff.close()

print('CAUTION: will support update and diff later, right now only for init')
driver.quit()