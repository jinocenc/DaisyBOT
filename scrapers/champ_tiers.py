#!/usr/bin/env python
# coding: utf-8

# In[28]:

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup as bs
import pandas as pd
import time
import json


# In[2]:


driver = webdriver.Chrome(ChromeDriverManager().install())
url = 'https://www.proguides.com/leagueoflegends/champions/search'
driver.get(url)


# In[3]:


time.sleep(2)


# In[4]:


page_html = driver.page_source
soup = bs(page_html, 'html.parser')
tier_list = soup.find('div', 'tier-list')


# In[5]:


str_tiers = ['s', 'a', 'b', 'c', 'd']
champ_names, champ_roles, champ_tier = [], [], []


# In[6]:


for i in range(len(str_tiers)):
    string = 'section tier tier-' + str_tiers[i]
    tier_div = tier_list.find('div', string)
    tier_thumbnails = tier_div.find_all('div', 'champion-thumbnail-text')
    for thumbnail in tier_thumbnails:
        name = thumbnail.text
        role = thumbnail.find('i').attrs['class'][-1]
        tier = str_tiers[i]
        champ_names.append(name)
        champ_roles.append(role)
        champ_tier.append(tier)


# In[7]:


data ={'champ_names':champ_names, 'champ_roles':champ_roles, 'champ_tier':champ_tier}
df = pd.DataFrame(data)


# In[8]:


left = '\n                      '
right = '\n                     '
df['champ_names'] = df['champ_names'].str.replace(left, '', regex=False)
df['champ_names'] = df['champ_names'].str.replace(right, '', regex=False)


# In[10]:


top, jungle, mid, adc, support = {}, {}, {}, {}, {}


# In[26]:


def csvToDict(champ_role, role_dict):
    for tier in str_tiers:
        role_dict[tier] = []
    dff = df[df['champ_roles'] == champ_role]
    for i in range(len(dff)):
        tier = dff.iloc[i]['champ_tier']
        role_dict[tier].append(dff.iloc[i]['champ_names'])


# In[27]:


csvToDict('top', top)
csvToDict('jungle', jungle)
csvToDict('mid', mid)
csvToDict('support', support)
csvToDict('adc', adc)


# In[40]:


def dictToJson(dictionary, file_name):
    j = json.dumps(dictionary)
    with open(file_name, 'w') as file:
        file.write(j)
        file.close


# In[43]:


dictToJson(top, 'top')
dictToJson(jungle, 'jungle')
dictToJson(mid, 'mid')
dictToJson(adc, 'adc')
dictToJson(support, 'support')

