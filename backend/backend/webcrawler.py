import requests
from bs4 import BeautifulSoup

def restaurant_crawler(max_parse_pages):
    page = 0
    while page < (max_parse_pages*10):
        url = "https://www.yelp.com/search?find_desc=&find_loc=Urbana%20Champaign%2C%20IL&ns=2&start=" + str(page)
        url_html_tag_code = requests.get(url)
        soup_object = BeautifulSoup(url_html_tag_code.text, features="html5lib")

        for link in soup_object.findAll('a', {'class': 'lemon--a__373c0__IEZFH link__373c0__29943 link-color--blue-dark__373c0__1mhJo link-size--inherit__373c0__2JXk5'}):
            link_obj = "https://www.yelp.com" + link.get('href')
            title = link.string
            print(link_obj)
            print(title)
            get_single_item_data(link_obj)
        page += 10

def get_single_item_data(item_url):
    #print(item_url)
    url_html_tag_code = requests.get(item_url)
    soup_object = BeautifulSoup(url_html_tag_code.text, features="html5lib")

    i = 1
    for item_name in soup_object.findAll('p', {'itemprop': 'description'}):
        print("Review #" + str(i) + "\n")
        print(item_name.string + "\n\n\n")
        i += 1

    for item_name in soup_object.findAll('p', {
        'class': 'lemon--p__373c0__3Qnnj text__373c0__2pB8f no-wrap__373c0__3qDj1 text-color--normal__373c0__K_MKN text-align--left__373c0__2pnx_'}):
        print(item_name.string)

    for item_name in soup_object.findAll('span', {'class': 'nowrap'}):
        print(item_name.string)

#init__main()
pass_pages_test = 3
restaurant_crawler(pass_pages_test)