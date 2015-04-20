# Directives for Apache2 setup on Ubuntu 12.04

/etc/apache2/ports.conf

```
Listen 80
Listen 81

NameVirtualHost *:80
NameVirtualHost *:81

<IfModule mod_ssl.c>
    Listen 443
</IfModule>

<IfModule mod_gnutls.c>
    Listen 443
</IfModule>
```

/etc/apache2/sites-available/exabyte.io

```
<VirtualHost *:80>
    ServerName exabyte.io
    ServerAlias www.exabyte.io
    DocumentRoot /root/public_html/exabyte.io/

    Options Indexes FollowSymLinks MultiViews Includes
    AddType text/html .html
    AddOutputFilter INCLUDES .html
</VirtualHost>
```

/etc/apache2/sites-available/exabyte.io_old

```
<VirtualHost *:81>
    ServerName exabyte.io
    ServerAlias www.exabyte.io
    DocumentRoot /root/public_html/exabyte.io_old
    <Directory /root/files>
        AllowOverride AuthConfig
    Order allow,deny
    Allow from all
    </Directory>
</VirtualHost>
```

/etc/apache2/sites-available/files.exabyte.io

```
<VirtualHost *:81>
    ServerName files.exabyte.io
    ServerAlias www.files.exabyte.io
    DocumentRoot /root/files
    <Directory /root/files>
        AllowOverride AuthConfig
    Order allow,deny
    Allow from all
    </Directory>
</VirtualHost>
```

/etc/apache2/sites-available/docs.exabyte.io

```
<VirtualHost *:81>
    ServerName docs.exabyte.io
    ServerAlias www.docs.exabyte.io
    DocumentRoot /root/exabyte-public-documentation/site
    <Directory /root/exabyte-public-documentation/site>
        AllowOverride AuthConfig
    Order allow,deny
    Allow from all
    </Directory>
</VirtualHost>
```

then run

```bash
chmod a+rX /root/
a2dissite default
a2enmod include
a2ensite exabyte.io
a2ensite exabyte.io_old
a2ensite files.exabyte.io
a2ensite docs.exabyte.io
service apache2 restart
```

# Directives for Apache2 setup on Mac

edit /etc/apache2/users/username.conf, add:

```
<Directory "/Users/username/Sites/">
    Options Indexes MultiViews FollowSymLinks Includes
    AllowOverride All
    Order allow,deny
    Allow from all
    AddType text/html .html
    AddOutputFilter INCLUDES .html
</Directory>
```

do

```bash
sudo apachetcl graceful
```
