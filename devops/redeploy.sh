#!/bin/sh

rm -rf techVVS-landing-page/
echo "pulling new main javascriptjenkins branch"
sudo git clone https://github.com/JavascriptJenkins/techVVS-landing-page
ls
cd techVVS-landing-page
echo "running npm install"
npm install
echo "running npm build"
npm run build
#echo "Moving files to nginx"
#ls
#sudo rm -rf /var/www/techvvs.io/html
#sudo mkdir /var/www/techvvs.io/html 
#sudo mv build/* /var/www/techvvs.io/html
echo "running instasll -g serve"
npm install -g serve
echo "deploying build folder with static server on port 3000 now"
su -c "nohup serve -s build &" -s /bin/sh root