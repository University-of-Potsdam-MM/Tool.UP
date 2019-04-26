#!/bin/bash 
service mysql restart
service tomcat8 restart
cd /toolup/ && mysql -uroot  -e "source dataDump.sql;"
cd /toolup/ && ng serve --host 0.0.0.0 &
/bin/bash
