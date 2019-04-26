FROM ubuntu:latest
COPY . /toolup/
RUN apt -y update && apt -y upgrade
RUN apt -y install tomcat8
RUN apt -y install nodejs
RUN apt -y install npm
RUN npm install -g @angular/cli
RUN cd /toolup/
RUN npm install bootstrap
RUN npm update
RUN apt -y  install apache2
RUN apt -y install mariadb-server 
RUN apt -y install mariadb-client
RUN cd /toolup/ && cp toolup.war /var/lib/tomcat8/webapps/
ENTRYPOINT [ "/toolup/entrypoint.sh" ]
