# Getting Started with Create React App

to install react : `yarn create react-app my-app`
to install eslint and prettier : `yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier`
start eslint in the project : `yarn run eslint --init`
to upgrade all the packages : `yarn upgrade -R eslint`

# Install mkcert for local https

point 1 : install mkcert and check the version `mkcert --version`
point 2 : make a folder cert : `mkdir cert` 
point 3 : go into the folder : `cd cert`
point 4 : create certificate for localhost : `mkcert -cert-file cert.pem -key-file key.pem  localhost`
point 5 : add those certificate in the system registry : `mkcert -install` 
point 6 : run react with https : `HTTPS=true SSL_CRT_FILE=./cert/cert.pem SSL_KEY_FILE=./cert/key.pem react-scripts start`