#General Differences between HTML5 and HTML4

##Following are some of the major characteristics that distinguish HTML5 from HTML4.

####1. Simplified and Clear Syntax

One example of this is the DOCTYPE element. In HTML4 the DOCTYPE declaration was too messy and lengthy and used to refer an external source. However in HTML5 DOCTYPE element has been made extremely simple. For instance a mere <!DOCTYPE html> is enough to specify the document type.

####2. Multimedia Elements

HTML5 contains built in support for integrated multimedia files into **web page via video and audio tags**. Previously, in HTML4, the multimedia content was integrated in web pages via third party plugins such as **Silverlight and flash**. 

####3. Accessing User Geographical location

Previously in HTML4, it was an extremely cumbersome task to get the geographical locations of the visitors visiting the site. It was even **difficult when the website was accessed through mobile devices**. On the other hand, in HTML5 is extremely easy to get the user location. HTML5’s **JS GeoLocation** can be leveraged to identify the location of the user accessing the website. 

####4. Client Side storage

In HTML4, in order to store important data on client side, **browser’s cache** was used. However, that cache is limited and doesn’t support relational storage mechanism. In HTML5, this issue has been addressed via **Web SQL database and application cache** that can be access via HTML5’s **JavaScript interface**.

####5. Client Server Communication

In HTML4 the communication between the client and server was done through **streaming and long polling**, since there are no web sockets available in HTML4. On the contrary, HTML5 contains **web sockets** that allow **full duplex communication** between clients and servers.

####6. JavaScript Threading Mechanism

In HTML4, JavaScript and the browser interface with which user interacts, run in the **same thread which affects performance**. HTML5 contains **JS Web Worker API which allows JavaScript and Browser interface to run in separate threads**. 

####7. Browser Compatibility

As aforementioned, HTML4 is an established standard for developing browser applications and has been in use for more than 10 years. For this reason, **HTML4 is compatible with almost all web-browsers**. On the other hand, **HTML5 is still in the process of evolution and the currently available tags are being modified and also new tags are being added. Therefore, HTML5 lags behind HTML4 in terms of compatibility with the browsers**.
