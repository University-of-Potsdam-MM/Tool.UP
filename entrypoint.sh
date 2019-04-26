#!/bin/bash
service mysql restart
service tomcat8 restart
cd /toolup/ && mysql -uroot  -e "source dataDump.sql;"
cd /toolup/ && ng serve --host 0.0.0.0 &
cd /toolup/ && compodoc --port 8888 -p src/tsconfig.app.json -s &
/bin/bash
