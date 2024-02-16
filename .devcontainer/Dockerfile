FROM --platform=linux/amd64 ubuntu:focal
RUN apt-get update -y
RUN apt-get install dialog apt-utils -y -q
RUN apt-get install sudo build-essential python3 libmpfr6 libmpc3 libssl-dev wget -y -q
RUN wget http://www.cse.unsw.edu.au/~cs3231/os161-files/os161-utils_2.0.8-4.deb
RUN sudo dpkg -i os161-utils_2.0.8-4.deb
RUN useradd -rm -u 1000 -d /home/osdev -s /bin/bash -g root -G sudo osdev -p "$(openssl passwd -1 admin)"
USER osdev 
WORKDIR /home/osdev
RUN mkdir -p ~/cs3231
CMD ["bash"]
