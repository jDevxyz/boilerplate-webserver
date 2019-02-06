# Boilerplate-Webserver
A quickstart to fuel your project with static assets

This code is in SNAPSHOT state, Bug is expected. Contribute to us via Pull Request, [or donation](https://paypal.me/hinasan). We also open for patrons [here](https://patreon.com/lolization)

## Documentation coming soon
[https://docs.lolization.space](https://docs.lolization.space).

# Installation

## Initial Setup
As every NodeJS project do, you need to do initial setup. First, clone this repository.
```sh
git clone https://github.com/HarokuCreativeStudio/boilerplate-webserver.git
```

Then, do library install via npm
```sh
npm install --save
```

If you can't do that, means you haven't install NodeJS yet. Go to [NodeJS Official Website](https://nodejs.org/en/) and install their package according to your operating system. 

To get your project on, simply run `npm start` at the project directory or run them with webserver.bat file (Double-clicking on Windows, or webserver.sh for Linux) and the webserver will bind to 3000 automatically. 

## Proxy Forward
As this project is basically running on localhost:3000, you need to setup a proxy forwarding to allow outsiders to access the webserver without including the port.

Note: Apache2 and Nginx method currently only available in Linux. Windows users should find your own workaround.

### Apache2
This option is really recommended for those who own VPS (Virtual Private Server) or homeserver with dedicated IPv4. You also need to own a FQDN and a DNS Manager. 
Note: This requires Apache v2.4.x or greater. If your version of Apache is older, please see Apache v2.2.x Instructions.

You have to enable the following Apache mods:
```sh
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_wstunnel
sudo a2enmod rewrite
sudo a2enmod headers
```

The next step is creating a configuration file, typically named after your site (e.g. www.example.com.conf), in the Apache vhost config directory, usually found at /etc/apache2/sites-available/. Make sure to match the FQDN you config at your DNS manager.

This repository provides you with preconfigured Apache2 config files. You can find this files under the project root dir, named `website.apache2.conf`. Just move them to /etc/apache2/sites-available, reload your Apache2 config with `systemctl reload apache2`, and your webserver are good-to-go.

### Nginx
Same as Apache2, this option is recommended for advanced users. Both required a dedicated IPv4 and a FQDN with DNS Manager.
Your Webserver by default runs on port 3000, meaning that builds are usually accessed using a port number in addition to their hostname (e.g. http://example.com:3000)

In order to allow your Webserver to be served without a port, nginx can be set up to proxy all requests to a particular hostname (or subdomain) to an upstream ExpressJS build running on any port.

You need to have NGINX version v1.3.13 or greater. Package managers may not provide a new enough version. To get the latest version, compile it yourself, or if on Ubuntu, use the NGINX Stable or NGINX Development PPA builds, if you are on Debian, use DotDeb repository to get the latest version of Nginx.
To determine your nginx version, execute `nginx -V` in a shell

NGINX-served sites are contained in a `server` block. This block of options goes in a specific place based on how nginx was installed and configured:
```sh
/path/to/nginx/sites-available/* -- files here must be aliased to ../sites-enabled
/path/to/nginx/conf.d/*.conf -- filenames must end in .conf
/path/to/nginx/httpd.conf -- if all else fails
```

Basic configuration files already provided within this repository. you can find this files under the project root dirm, named `website.nginx.conf`. 

### Ngrok
The last choice, also the easiest way. First, you need to download the ngrok package according to your operating system. You can download them via browser manually, or via CLI with `wget`.
#### Windows
```sh
# 64-bit
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-windows-amd64.zip

# 32-bit
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-windows-386.zip
```
#### Linux
```sh
# 64-bit
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip

# 32-bit
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-386.zip

# ARM
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip
```
#### MacOS
```sh
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-darwin-amd64.zip
# or
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-darwin-386.zip
```
#### FreeBSD
```sh
# 64-bit
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-freebsd-amd64.zip

# 32-bit
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-freebsd-386.zip
```

After downloading `ngrok`, put them on `cli` folder inside the project directory and extract them. Then, you can start `ngrok` proxy server using `proxy.bat` (Windows) or `proxy.sh` (Linux). Find more and explore ngrok features with their nice-and-neat documentation [here](https://ngrok.com/docs).

Alternative to Ngrok:
[localtunnel.me](https://localtunnel.github.io/www/).
[Zeit's Now](https://zeit.co/now).

You can find the comparison to proxy service and such [here](https://www.pluralsight.com/guides/exposing-your-local-node-js-app-to-the-world)