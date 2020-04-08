import os
import praw
import configparser
import urllib.request
from pathlib import Path

# Path to save all downloads and path to current directory
path = str(os.path.join(Path.home(), 'Downloads')).replace('\\', '/')
path_current_directory = os.path.dirname(__file__)

# Reading the config.ini file
config = configparser.ConfigParser()
config.read(path_current_directory + '/config.ini')

# Connecting to Reddit
reddit = praw.Reddit(
    client_id = config['reddit_info']['client_id'], 
    client_secret = config['reddit_info']['client_secret'], 
    user_agent = 'download saved',
    username = config['reddit_info']['username'],
    password = config['reddit_info']['password'])

# Get each saved item
for item in reddit.user.me().saved():
    fileExtension = item.url[-4:]
    submission = reddit.submission(id=item.id)
    # Save if the file has a jpg or png extension, == is the equality operator
    if(fileExtension == '.jpg' or  fileExtension == '.png'):
        fullFileName = os.path.join(path + '/' + item.name + fileExtension)
        print(fullFileName)
        urllib.request.urlretrieve(item.url, fullFileName)
        # Unsave the submisstion after downloading
        submission.unsave()
