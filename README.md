# Exabyte

## Directions about how to install/run the codebase

#### how to install/run

| Step | Command | Description | 
| --- | --- | --- |
| 1 | `yarn` or `npm i` | open the terminal at the root of the project and execute the command to establish dependencies |
| 2 | `yarn start` or `npm start`| open the terminal and go from the root of the project to the folder /packages/website and then execute the command (when using a WebStorm you can go to the above directory by opening the package.json and execute the command `start` |

## Prerequisites

### Docker Engine

#### CentOS

1. Ensure previous installation is cleaned up

```shell
yum remove docker \
      docker-client \
      docker-client-latest \
      docker-common \
      docker-latest \
      docker-latest-logrotate \
      docker-logrotate \
      docker-engine
```

2. Add repository

```shell
yum install -y yum-utils
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

3. Install required dependencies

```shell
yum install docker-ce docker-ce-cli containerd.io
```

4. Start Docker Engine

```shell
systemctl start docker
```

5. Authenticate through Docker registry

```shell
docker login dcr.bndigital.dev/exabyte --username=sa-exabyte --password=nUF52NvGU1Ye9yxPffONupLJcekkjHBn
```

6. Start application container

```shell
docker run --name=exabyte --volume=database:/usr/local/src/packages/cms/.tmp --volume=uploads:/usr/local/src/packages/cms/public/uploads -it -d -p 443:8443 -p 80 dcr.bndigital.dev/exabyte/app:latest 
docker run --name=exabyte --volume=database:/usr/local/src/packages/cms/.tmp --volume=uploads:/usr/local/src/packages/cms/public/uploads --volume=/etc/pki/cert:/etc/pki/cert --interactive --tty --daemonize --port 443:8443 dcr.bndigital.dev/exabyte/app:latest 
```

## Stopping

docker stop exabyte


## Build

Execute locally from project root:

```shell
docker build -t dcr.bndigital.dev/exabyte/app:latest .
```

## Further update

Execute on server:

```shell
docker pull dcr.bndigital.dev/exabyte/app:latest
docker restart exabyte
```