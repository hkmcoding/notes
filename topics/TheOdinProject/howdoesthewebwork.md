## [How the Web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works#Clients_and_servers)

- Computers connected to the web are called <i>clients and servers</i>.
- Clients are typical web user's internet-connected devices
- Servers are computers that store webpages, sites, or apps
- When a client device wants to access a webpage, a copy of the webpage is downloaded from the server onto the client machine to be displayed in the user's web browser
- <i>TCP/IP</i> (Transmission Control Protocol and Internet Protocol) are communication protocols that define how data should travel across the web
- <i>DNS</i> (Domain Name Servers) are like an address book for websites. When you type a web address in your browser, the browser looks at the DNS to find the website's real address before it can retrieve the website
- <i>HTTP</i> (Hypertext Transfer Protocol) is an application protocol that defines a language for the clients and servers to speak to each other
- Component Files - A website is made up of many different files. They come in mainly two types: code files and assets.

## What happens when you type a web address into your browser

1. The browser goes to a DNS server, and finds the real address of the server that the website lives on
2. The browser sends an HTTP request to the server asking to send a copy of the website to the client. This message, and all other data sent between the client and server, is sent accross using TCP/IP.
3. If the server approves the client's request, the server sends the client a "200 OK" message, and then it starts sendings the website's files ot the browser as a series of small chunks called data packets
4. The browser assembles the small chunks into a complete website and displays it to you

## DNS explained

- Domain Name Servers convert a domain name to a machine readable IP address. Thanks to these servers you can access sites using their alias and not their IP address