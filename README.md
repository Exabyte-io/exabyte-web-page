# Directives for Apache2 setup on Ubuntu 12.04

/etc/apache2/ports.conf

```
Listen 80
Listen 81

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
    DocumentRoot /root/public_html/exabyte.io/new

    Options Indexes FollowSymLinks MultiViews Includes
    AddType text/html .html
    AddOutputFilter INCLUDES .html
</VirtualHost>
```

/etc/apache2/sites-available/exabyte.io_old

```
<VirtualHost *:81>
    ServerName exabyte.io_old
    ServerAlias www.exabyte.io_old
    DocumentRoot /root/public_html/exabyte.io
</VirtualHost>
```

run `a2enmod include`
run `service apache2 restart`

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
