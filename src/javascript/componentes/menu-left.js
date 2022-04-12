class menuLeft extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let menuHome = `
        <div id="smoothmenu1" class="ddsmoothmenu">
        <ul>
            <li style="
                z-index: 1000;
            ">
                <a href="" style="
                    padding-right: 23px;
                ">OWASP
                    2017<img src="src/images/right.gif" class="rightarrowclass" style="
                        border: 0;
                    " /></a>
                <ul style="
                    display: none;
                    top: 0px;
                    box-shadow: rgb(
                            170,
                            170,
                            170
                        )
                        5px
                        5px
                        5px;
                    visibility: visible;
                ">
                    <li style="
                        z-index: 999;
                    ">
                        <a href="">A1
                            -
                            Injection
                            (SQL)<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li style="
                                z-index: 998;
                            ">
                                <a href="">SQLi
                                    -
                                    Extract
                                    Data<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=user-info.php">User
                                            Info
                                            (SQL)</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 997;
                            ">
                                <a href="">SQLi
                                    -
                                    Bypass
                                    Authentication<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=login.php">Login</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 996;
                            ">
                                <a href="">SQLi
                                    -
                                    Insert
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="?page=add-to-your-blog.php">Add
                                            to
                                            your
                                            blog</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=register.php">Register</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=captured-data.php">View
                                            Captured
                                            Data</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 995;
                            ">
                                <a href="">Blind
                                    SQL
                                    via
                                    Timing<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=login.php">Login</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-info.php">User
                                            Info
                                            (SQL)</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 994;
                            ">
                                <a href="">SQLMAP
                                    Practice<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=sqlmap-targets.php">SQLMAP
                                            Practice
                                            Targets</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=login.php">Login</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=view-someones-blog.php">View
                                            Someones
                                            Blog</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-info.php">User
                                            Info
                                            (SQL)</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 993;
                            ">
                                <a href="">Via
                                    JavaScript
                                    Object
                                    Notation
                                    (JSON)<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                            Test
                                            Tool
                                            Lookup</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=pen-test-tool-lookup-ajax.php">Pen
                                            Test
                                            Tool
                                            Lookup
                                            (AJAX)</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 992;
                            ">
                                <a href="">Via
                                    SOAP
                                    Web
                                    Service<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="./webservices/soap/ws-user-account.php">Lookup
                                            User</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 991;
                            ">
                                <a href="">Via
                                    REST
                                    Web
                                    Service<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="./webservices/rest/ws-user-account.php">User
                                            Account
                                            Management</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 990;
                    ">
                        <a href="">A1
                            -
                            Injection
                            (Other)<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li style="
                                z-index: 989;
                            ">
                                <a href="">Application
                                    Log
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=add-to-your-blog.php">Add
                                            to
                                            your
                                            blog</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=dns-lookup.php">DNS
                                            Lookup</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=echo.php">Echo
                                            Message</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=cors.php">Echo
                                            Message
                                            (CORS)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=content-security-policy.php">Echo
                                            Message
                                            (CSP)</a>
                                    </li>
                                    <li>
                                        <a
                                            href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                            Viewer</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=capture-data.php">Capture
                                            Data
                                            Page</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=login.php">Login</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=register.php">Register
                                            User</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=source-viewer.php">Source
                                            Viewer</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=text-file-viewer.php">Text
                                            File
                                            Viewer</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 988;
                            ">
                                <a href="">Buffer
                                    Overflow<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=repeater.php">Repeater</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 987;
                            ">
                                <a href="">Cascading
                                    Style
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=set-background-color.php">Set
                                            Background
                                            Color</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="index.php?page=view-user-privilege-level.php&amp;iv=6bc24fc1ab650b25b4114e93a98f1eba">CBC-bit
                                    Flipping</a>
                            </li>
                            <li style="
                                z-index: 986;
                            ">
                                <a href="">Command
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=dns-lookup.php">DNS
                                            Lookup</a>
                                    </li>
                                    <li>
                                        <a href="./webservices/soap/ws-lookup-dns-record.php">DNS
                                            Lookup
                                            (SOAP
                                            Web
                                            Service)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=echo.php">Echo
                                            Message</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=cors.php">Echo
                                            Message
                                            (CORS)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=content-security-policy.php">Echo
                                            Message
                                            (CSP)</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 985;
                            ">
                                <a href="">Frame
                                    Source
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a
                                            href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                            Viewer</a>
                                    </li>
                                    <li>
                                        <a
                                            href="index.php?page=styling-frame.php&amp;page-to-frame=styling.php%3Fpage-title%3DStyling+with+Mutillidae">Styling
                                            with
                                            Mutilidae</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 984;
                            ">
                                <a href="">HTML
                                    Injection
                                    (HTMLi)<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=add-to-your-blog.php">Add
                                            to
                                            your
                                            blog</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=browser-info.php">Browser
                                            Info</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=dns-lookup.php">DNS
                                            Lookup</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=echo.php">Echo
                                            Message</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=cors.php">Echo
                                            Message
                                            (CORS)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=content-security-policy.php">Echo
                                            Message
                                            (CSP)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                            Test
                                            Tool
                                            Lookup</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=text-file-viewer.php">Text
                                            File
                                            Viewer</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-info.php">User
                                            Info
                                            (SQL)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-info-xpath.php">User
                                            Info
                                            (XPath)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=set-background-color.php">Set
                                            Background
                                            Color</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=html5-storage.php">HTML5
                                            Web
                                            Storage</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=capture-data.php">Capture
                                            Data
                                            Page</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=captured-data.php">View
                                            Captured
                                            Data</a>
                                    </li>
                                    <li>
                                        <a
                                            href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                            Viewer</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=arbitrary-file-inclusion.php">Arbitrary
                                            File
                                            Inclusion</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-poll.php">Poll
                                            Question</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=register.php">Register
                                            User</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=login.php">Login</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=back-button-discussion.php">Those
                                            "Back"
                                            Buttons</a>
                                    </li>
                                    <li>
                                        <a
                                            href="index.php?page=styling-frame.php&amp;page-to-frame=styling.php%3Fpage-title%3DStyling+with+Mutillidae">Styling
                                            with
                                            Mutilidae</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=password-generator.php&amp;username=anonymous">Password
                                            Generator</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 983;
                            ">
                                <a href="">HTMLi
                                    via
                                    HTTP
                                    Headers<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=back-button-discussion.php">Those
                                            "Back"
                                            Buttons</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=browser-info.php">Browser
                                            Info</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=site-footer-xss-discussion.php">Site
                                            Footer</a>
                                    </li>
                                    <li></li>
                                    <li>
                                        <a href="">HTTP
                                            Response
                                            Splitting
                                            (Hint:
                                            Difficult)</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 982;
                            ">
                                <a href="">HTMLi
                                    Via
                                    DOM
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=html5-storage.php">HTML5
                                            Web
                                            Storage</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=password-generator.php&amp;username=anonymous">Password
                                            Generator</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 981;
                            ">
                                <a href="">HTMLi
                                    Via
                                    Cookie
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=capture-data.php">Capture
                                            Data
                                            Page</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 980;
                            ">
                                <a href="">HTTP
                                    Parameter
                                    Pollution<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=user-poll.php">Poll
                                            Question</a>
                                    </li>
                                    <li>
                                        <a
                                            href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                            Viewer</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 979;
                            ">
                                <a href="">JavaScript
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=back-button-discussion.php">Those
                                            "Back"
                                            Buttons</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=password-generator.php&amp;username=anonymous">Password
                                            Generator</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=browser-info.php">Browser
                                            Info</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 978;
                            ">
                                <a href="">JavaScript
                                    Object
                                    Notation
                                    (JSON)
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                            Test
                                            Tool
                                            Lookup</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=pen-test-tool-lookup-ajax.php">Pen
                                            Test
                                            Tool
                                            Lookup
                                            (AJAX)</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 977;
                            ">
                                <a href="">LDAP
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=conference-room-lookup.php">Conference
                                            Room
                                            Lookup</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 976;
                            ">
                                <a href="">Parameter
                                    Addition<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=repeater.php">Repeater</a>
                                    </li>
                                    <li>
                                        <a
                                            href="index.php?page=view-user-privilege-level.php&amp;iv=6bc24fc1ab650b25b4114e93a98f1eba">View
                                            User
                                            Privileges</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 975;
                            ">
                                <a href="">XML
                                    External
                                    Entity
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=xml-validator.php">XML
                                            Validator</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 974;
                            ">
                                <a href="">XML
                                    Entity
                                    Expansion<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=xml-validator.php">XML
                                            Validator</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 973;
                            ">
                                <a href="">XML
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=xml-validator.php">XML
                                            Validator</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 972;
                            ">
                                <a href="">XPath
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=user-info-xpath.php">User
                                            Info
                                            (XPath)</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 971;
                    ">
                        <a href="">
                            A2
                            -
                            Broken
                            Authentication
                            and
                            Session
                            Management
                            <img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li style="
                                z-index: 970;
                            ">
                                <a href="">Authentication
                                    Bypass<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=login.php">Via
                                            Brute
                                            Force</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=privilege-escalation.php">Via
                                            Cookies</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=login.php">Via
                                            SQL
                                            Injection</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=edit-account-profile.php">Via
                                            Account
                                            Hijacking</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 969;
                            ">
                                <a href="">Priviliege
                                    Escalation<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=privilege-escalation.php">Via
                                            Cookies</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=login.php">Login</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=edit-account-profile.php">Via
                                            Account
                                            Hijacking</a>
                                    </li>
                                    <li>
                                        <a
                                            href="index.php?page=view-user-privilege-level.php&amp;iv=6bc24fc1ab650b25b4114e93a98f1eba">Via
                                            CBC-bit
                                            Flipping</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 968;
                            ">
                                <a href="">Username
                                    Enumeration<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=login.php">Login</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=edit-account-profile.php">Edit
                                            User
                                            Profile</a>
                                    </li>
                                    <li>
                                        <a href="./webservices/soap/ws-user-account.php">Lookup
                                            User
                                            (SOAP
                                            Web
                                            Service)</a>
                                    </li>
                                    <li>
                                        <a href="./webservices/rest/ws-user-account.php">User
                                            Account
                                            Management
                                            (REST
                                            Web
                                            Service)</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 967;
                            ">
                                <a href="">JSON
                                    Web
                                    Token
                                    (JWT)<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=jwt.php">Current
                                            User
                                            Information</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 966;
                    ">
                        <a href="">A3
                            -
                            Sensitive
                            Data
                            Exposure<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li style="
                                z-index: 965;
                            ">
                                <a href="">Information
                                    Disclosure<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=edit-account-profile.php">Edit
                                            User
                                            Profile</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=phpinfo.php">PHP
                                            Info
                                            Page</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=robots-txt.php">Robots.txt</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=secret-administrative-pages.php">"Secret"
                                            Administrative
                                            Pages</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=html5-storage.php">HTML5
                                            Web
                                            Storage</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=client-side-comments.php">HTML/JavaScript
                                            Comments</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=cache-control.php">Cache-Control</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=framing.php">Click-Jacking</a>
                                    </li>
                                    <li>
                                        <a href="framer.html">Cross-Site
                                            Framing</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=framing.php">X-Frame-Options
                                            (Click-Jacking)</a>
                                    </li>
                                    <li>
                                        <a href="framer.html">X-Frame-Options
                                            (Cross-frame
                                            Scripting)</a>
                                    </li>
                                </ul>
                            </li>

                            <li style="
                                z-index: 964;
                            ">
                                <a href="">Application
                                    Path
                                    Disclosure<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=phpinfo.php">PHP
                                            Info
                                            Page</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=robots-txt.php">Robots.txt</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 963;
                            ">
                                <a href="">Platform
                                    Path
                                    Disclosure<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=phpinfo.php">PHP
                                            Info
                                            Page</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="index.php?page=ssl-misconfiguration.php">SSL
                                    Misconfiguration</a>
                            </li>
                            <li style="
                                z-index: 962;
                            ">
                                <a href="">JSON
                                    Web
                                    Token
                                    (JWT)<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=jwt.php">Current
                                            User
                                            Information</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 961;
                    ">
                        <a href="">A4
                            -
                            XML
                            External
                            Entities<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li style="
                                z-index: 960;
                            ">
                                <a href="">XML
                                    External
                                    Entity
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=xml-validator.php">XML
                                            Validator</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 959;
                    ">
                        <a href="">A5
                            -
                            Broken
                            Access
                            Control<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li style="
                                z-index: 958;
                            ">
                                <a href="">Insecure
                                    Direct
                                    Object
                                    References<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=edit-account-profile.php">Via
                                            Account
                                            Hijacking</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=arbitrary-file-inclusion.php">Local
                                            File
                                            Inclusion</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=arbitrary-file-inclusion.php">Remote
                                            File
                                            Inclusion</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=text-file-viewer.php">Text
                                            File
                                            Viewer</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=source-viewer.php">Source
                                            Viewer</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=credits.php">Credits</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 957;
                            ">
                                <a href="">Missing
                                    Function
                                    Level
                                    Access
                                    Control<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=privilege-escalation.php">Cookies
                                            as
                                            Auth
                                            Tokens</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=secret-administrative-pages.php">"Secret"
                                            Administrative
                                            Pages</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=client-side-control-challenge.php">Client-side
                                            Control
                                            Challenge</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=robots-txt.php">Robots.txt</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 956;
                            ">
                                <a href="">JSON
                                    Web
                                    Token
                                    (JWT)<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=jwt.php">Current
                                            User
                                            Information</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 955;
                            ">
                                <a href="">Cross-origin
                                    Resource
                                    Sharing
                                    (CORS)<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=cors.php">Echo
                                            Message
                                            (CORS)</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 954;
                    ">
                        <a href="">A6
                            -
                            Security
                            Misconfiguration<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li style="
                                z-index: 953;
                            ">
                                <a href="">Cross-origin
                                    Resource
                                    Sharing
                                    (CORS)<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=cors.php">Echo
                                            Message
                                            (CORS)</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="index.php?page=directory-browsing.php">Directory
                                    Browsing</a>
                            </li>
                            <li style="
                                z-index: 952;
                            ">
                                <a href="">Method
                                    Tampering
                                    (GET
                                    for
                                    POST)<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=add-to-your-blog.php">Add
                                            to
                                            your
                                            blog</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-info.php">User
                                            Info
                                            (SQL)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-info-xpath.php">User
                                            Info
                                            (XPath)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-poll.php">Poll
                                            Question</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=dns-lookup.php">DNS
                                            Lookup</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=echo.php">Echo
                                            Message</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=cors.php">Echo
                                            Message
                                            (CORS)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=content-security-policy.php">Echo
                                            Message
                                            (CSP)</a>
                                    </li>
                                </ul>
                            </li>

                            <li style="
                                z-index: 951;
                            ">
                                <a href="">HTTP
                                    Headers<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=cors.php">Cross-Origin
                                            Resource
                                            Sharing
                                            (CORS)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=cache-control.php">Cache-Control</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=framing.php">Click-Jacking</a>
                                    </li>
                                    <li>
                                        <a href="framer.html">Cross-Site
                                            Framing
                                            (Third-Party
                                            Framing)</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="index.php?page=user-agent-impersonation.php">User-Agent
                                    Impersonation</a>
                            </li>
                            <li>
                                <a href="index.php?page=upload-file.php">Unrestricted
                                    File
                                    Upload</a>
                            </li>
                            <li>
                                <a href="index.php?page=ssl-misconfiguration.php">SSL
                                    Misconfiguration</a>
                            </li>
                            <li>
                                <a href="index.php?page=phpinfo.php">PHP
                                    Info
                                    Page</a>
                            </li>
                            <li>
                                <a href="index.php?page=robots-txt.php">Robots.txt</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 950;
                    ">
                        <a href="">A7
                            -
                            Cross
                            Site
                            Scripting
                            (XSS)<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li style="
                                z-index: 949;
                            ">
                                <a href="">Reflected
                                    (First
                                    Order)<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=dns-lookup.php">DNS
                                            Lookup</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=echo.php">Echo
                                            Message</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=cors.php">Echo
                                            Message
                                            (CORS)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=content-security-policy.php">Echo
                                            Message
                                            (CSP)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                            Test
                                            Tool
                                            Lookup</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=text-file-viewer.php">Text
                                            File
                                            Viewer</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-info.php">User
                                            Info
                                            (SQL)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=set-background-color.php">Set
                                            Background
                                            Color</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=html5-storage.php">HTML5
                                            Web
                                            Storage</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=capture-data.php">Capture
                                            Data
                                            Page</a>
                                    </li>
                                    <li>
                                        <a
                                            href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                            Viewer</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=arbitrary-file-inclusion.php">Arbitrary
                                            File
                                            Inclusion</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=xml-validator.php">XML
                                            Validator</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-info-xpath.php">User
                                            Info
                                            (XPath)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-poll.php">Poll
                                            Question</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=register.php">Register
                                            User</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=browser-info.php">Browser
                                            Info</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=back-button-discussion.php">Those
                                            "Back"
                                            Buttons</a>
                                    </li>
                                    <li>
                                        <a
                                            href="index.php?page=styling-frame.php&amp;page-to-frame=styling.php%3Fpage-title%3DStyling+with+Mutillidae">Styling
                                            with
                                            Mutilidae</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=password-generator.php&amp;username=anonymous">Password
                                            Generator</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=client-side-control-challenge.php">Client-side
                                            Control
                                            Challenge</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 948;
                            ">
                                <a href="">Persistent
                                    (Second
                                    Order)<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=add-to-your-blog.php">Add
                                            to
                                            your
                                            blog</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=view-someones-blog.php">View
                                            someone's
                                            blog</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=register.php">Register
                                            User</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=edit-account-profile.php">Edit
                                            User
                                            Profile</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=show-log.php">Show
                                            Log</a>
                                    </li>
                                    <li></li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 947;
                            ">
                                <a href="">DOM-Based<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=html5-storage.php">HTML5
                                            Web
                                            Storage</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=password-generator.php&amp;username=anonymous">Password
                                            Generator</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 946;
                            ">
                                <a href="" target="_blank">Cross
                                    Site
                                    Request
                                    Forgery
                                    (CSRF)<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=add-to-your-blog.php">Add
                                            to
                                            your
                                            blog</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=register.php">Register
                                            User</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-poll.php">Poll
                                            Question</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 945;
                            ">
                                <a href="">Via
                                    "Input"
                                    (GET/POST)<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=add-to-your-blog.php">Add
                                            to
                                            your
                                            blog</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=view-someones-blog.php">View
                                            someone's
                                            blog</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=show-log.php">Show
                                            Log</a>
                                    </li>
                                    <li></li>
                                    <li>
                                        <a href="index.php?page=text-file-viewer.php">Text
                                            File
                                            Viewer</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=dns-lookup.php">DNS
                                            Lookup</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=echo.php">Echo
                                            Message</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=cors.php">Echo
                                            Message
                                            (CORS)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=content-security-policy.php">Echo
                                            Message
                                            (CSP)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-info.php">User
                                            Info
                                            (SQL)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-info-xpath.php">User
                                            Info
                                            (XPath)</a>
                                    </li>
                                    <li>
                                        <a href="index.php">Missing
                                            HTTPOnly
                                            Attribute</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=set-background-color.php">Set
                                            Background
                                            Color</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                            Test
                                            Tool
                                            Lookup</a>
                                    </li>
                                    <li>
                                        <a
                                            href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                            Viewer</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 944;
                            ">
                                <a href="">Via
                                    HTTP
                                    Headers<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=browser-info.php">Browser
                                            Info</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=show-log.php">Show
                                            Log</a>
                                    </li>
                                    <li></li>
                                    <li>
                                        <a href="index.php?page=site-footer-xss-discussion.php">Site
                                            Footer</a>
                                    </li>
                                    <li></li>
                                    <li>
                                        <a href="index.php?page=back-button-discussion.php">Those
                                            "Back"
                                            Buttons</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 943;
                            ">
                                <a href="">Via
                                    HTTP
                                    Attribute<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a
                                            href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                            Viewer</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 942;
                            ">
                                <a href="">Via
                                    Misconfiguration<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php">Missing
                                            HTTPOnly
                                            Attribute</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 941;
                            ">
                                <a href="">Against
                                    HTML5
                                    Web
                                    Storage<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=html5-storage.php">HTML5
                                            Web
                                            Storage</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 940;
                            ">
                                <a href="">Against
                                    JSON<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                            Test
                                            Tool
                                            Lookup</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 939;
                            ">
                                <a href="">Via
                                    Cookie
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=capture-data.php">Capture
                                            Data
                                            Page</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 938;
                            ">
                                <a href="">Via
                                    XML
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=xml-validator.php">XML
                                            Validator</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 937;
                            ">
                                <a href="">Via
                                    XPath
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=user-info-xpath.php">User
                                            Info
                                            (XPath)</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 936;
                            ">
                                <a href="">Via
                                    Path
                                    Relative
                                    Style
                                    Sheet
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a
                                            href="index.php?page=styling-frame.php&amp;page-to-frame=styling.php%3Fpage-title%3DStyling+with+Mutillidae">Styling
                                            with
                                            Mutilidae</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 935;
                            ">
                                <a href="">BeeF
                                    Framework
                                    Targets<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="index.php?page=add-to-your-blog.php">Add
                                            to
                                            your
                                            blog</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=view-someones-blog.php">View
                                            someone's
                                            blog</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=show-log.php">Show
                                            Log</a>
                                    </li>
                                    <li></li>
                                    <li>
                                        <a href="index.php?page=dns-lookup.php">DNS
                                            Lookup</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=echo.php">Echo
                                            Message</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=cors.php">Echo
                                            Message
                                            (CORS)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=content-security-policy.php">Echo
                                            Message
                                            (CSP)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                            Test
                                            Tool
                                            Lookup</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=text-file-viewer.php">Text
                                            File
                                            Viewer</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-info.php">User
                                            Info
                                            (SQL)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=set-background-color.php">Set
                                            Background
                                            Color</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=html5-storage.php">HTML5
                                            Web
                                            Storage</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=capture-data.php">Capture
                                            Data
                                            Page</a>
                                    </li>
                                    <li>
                                        <a
                                            href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                            Viewer</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=arbitrary-file-inclusion.php">Arbitrary
                                            File
                                            Inclusion</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=xml-validator.php">XML
                                            Validator</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-info-xpath.php">User
                                            Info
                                            (XPath)</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=user-poll.php">Poll
                                            Question</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=register.php">Register
                                            User</a>
                                    </li>
                                    <li>
                                        <a href="index.php?page=password-generator.php&amp;username=anonymous">Password
                                            Generator</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="">A8
                            -
                            Insecure
                            Deserialization</a>
                    </li>
                    <li style="
                        z-index: 934;
                    ">
                        <a href="">A9
                            -
                            Using
                            Components
                            with
                            Known
                            Vulnerabilities<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=phpinfo.php">PHP
                                    Info
                                    Page</a>
                            </li>
                            <li>
                                <a
                                    href="index.php?page=view-user-privilege-level.php&amp;iv=6bc24fc1ab650b25b4114e93a98f1eba">CBC-bit
                                    Flipping</a>
                            </li>
                            <li>
                                <a href="index.php?page=ssl-misconfiguration.php">SSL
                                    Misconfiguration</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="">A10
                            -
                            Insufficient
                            Logging
                            and
                            Monitoring</a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul>
            <li style="
                z-index: 933;
            ">
                <a href="" style="
                    padding-right: 23px;
                ">OWASP
                    2013<img src="src/images/right.gif" class="rightarrowclass" style="
                        border: 0;
                    " /></a>
                <ul style="
                    display: none;
                    top: 0px;
                    box-shadow: rgb(
                            170,
                            170,
                            170
                        )
                        5px
                        5px
                        5px;
                    visibility: visible;
                ">
                    <li style="
                        z-index: 932;
                    ">
                        <a href="">A8
                            -
                            Cross
                            Site
                            Request
                            Forgery
                            (CSRF)<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=add-to-your-blog.php">Add
                                    to
                                    your
                                    blog</a>
                            </li>
                            <li>
                                <a href="index.php?page=register.php">Register
                                    User</a>
                            </li>
                            <li>
                                <a href="index.php?page=user-poll.php">Poll
                                    Question</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 931;
                    ">
                        <a href="">A10
                            -
                            Unvalidated
                            Redirects
                            and
                            Forwards<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="?page=credits.php">Credits</a>
                            </li>
                            <li>
                                <a href="">Setup/reset
                                    the
                                    DB
                                    (Disabled:
                                    Not
                                    Admin)</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        <ul>
            <li style="
                z-index: 930;
            ">
                <a href="" style="
                    padding-right: 23px;
                ">OWASP
                    2010<img src="src/images/right.gif" class="rightarrowclass" style="
                        border: 0;
                    " /></a>
                <ul style="
                    display: none;
                    top: 0px;
                    box-shadow: rgb(
                            170,
                            170,
                            170
                        )
                        5px
                        5px
                        5px;
                    visibility: visible;
                ">
                    <li style="
                        z-index: 929;
                    ">
                        <a href="">A7
                            -
                            Insecure
                            Cryptographic
                            Storage<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=user-info.php">User
                                    Info
                                    (SQL)</a>
                            </li>
                            <li>
                                <a href="index.php?page=user-info-xpath.php">User
                                    Info
                                    (XPath)</a>
                            </li>
                            <li>
                                <a href="index.php?page=html5-storage.php">HTML5
                                    Web
                                    Storage</a>
                            </li>
                            <li>
                                <a
                                    href="index.php?page=view-user-privilege-level.php&amp;iv=6bc24fc1ab650b25b4114e93a98f1eba">View
                                    User
                                    Privileges</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 928;
                    ">
                        <a href="">A8
                            -
                            Failure
                            to
                            Restrict
                            URL
                            Access<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=edit-account-profile.php">Edit
                                    User
                                    Profile</a>
                            </li>
                            <li>
                                <a href="index.php?page=source-viewer.php">Source
                                    Viewer</a>
                            </li>
                            <li>
                                <a href="index.php?page=secret-administrative-pages.php">"Secret"
                                    Administrative
                                    Pages</a>
                            </li>
                            <li>
                                <a href="index.php?page=robots-txt.php">Robots.txt</a>
                            </li>
                            <li>
                                <a href="index.php?page=arbitrary-file-inclusion.php">Arbitrary
                                    File
                                    Inclusion</a>
                            </li>
                            <li>
                                <a href="index.php?page=phpinfo.php">PHP
                                    Info
                                    Page</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 927;
                    ">
                        <a href="">A9
                            -
                            Insufficient
                            Transport
                            Layer
                            Protection<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=ssl-misconfiguration.php">SSL
                                    Misconfiguration</a>
                            </li>
                            <li>
                                <a href="index.php?page=login.php">Login</a>
                            </li>
                            <li>
                                <a href="index.php?page=user-info.php">User
                                    Info
                                    (SQL)</a>
                            </li>
                            <li>
                                <a href="index.php?page=user-info-xpath.php">User
                                    Info
                                    (XPath)</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        <ul>
            <li style="
                z-index: 926;
            ">
                <a href="" style="
                    padding-right: 23px;
                ">OWASP
                    2007<img src="src/images/right.gif" class="rightarrowclass" style="
                        border: 0;
                    " /></a>
                <ul style="
                    display: none;
                    top: 0px;
                    box-shadow: rgb(
                            170,
                            170,
                            170
                        )
                        5px
                        5px
                        5px;
                    visibility: visible;
                ">
                    <li style="
                        z-index: 925;
                    ">
                        <a href="">A3
                            -
                            Malicious
                            File
                            Execution<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=text-file-viewer.php">Text
                                    File
                                    Viewer</a>
                            </li>
                            <li>
                                <a href="index.php?page=source-viewer.php">Source
                                    Viewer</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 924;
                    ">
                        <a href="">A6
                            -
                            Information
                            Leakage<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=edit-account-profile.php">Edit
                                    User
                                    Profile</a>
                            </li>
                            <li>
                                <a href="index.php">Cache-Control</a>
                            </li>
                            <li>
                                <a href="index.php">X-Powered-By
                                    HTTP
                                    Header</a>
                            </li>
                            <li>
                                <a href="index.php?page=client-side-comments.php">HTML/JavaScript
                                    Comments</a>
                            </li>
                            <li>
                                <a href="index.php?page=framing.php">Click-Jacking</a>
                            </li>
                            <li>
                                <a href="framer.html">Cross-Site
                                    Framing
                                    (Third-Party
                                    Framing)</a>
                            </li>
                            <li>
                                <a href="index.php?page=html5-storage.php">HTML5
                                    Web
                                    Storage</a>
                            </li>
                            <li>
                                <a href="index.php?page=phpinfo.php">PHP
                                    Info
                                    Page</a>
                            </li>
                            <li>
                                <a href="index.php?page=robots-txt.php">Robots.txt</a>
                            </li>
                            <li>
                                <a href="index.php?page=ssl-misconfiguration.php">SSL
                                    Misconfiguration</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 923;
                    ">
                        <a href="">A6
                            -
                            Improper
                            Error
                            Handling<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=user-info.php">User
                                    Info
                                    (SQL)</a>
                            </li>
                            <li>
                                <a href="index.php?page=user-info-xpath.php">User
                                    Info
                                    (XPath)</a>
                            </li>
                            <li>
                                <a href="index.php?page=login.php">Login</a>
                            </li>
                            <li>
                                <a href="index.php?page=register.php">Register</a>
                            </li>
                            <li>
                                <a href="index.php?page=edit-account-profile.php">Edit
                                    User
                                    Profile</a>
                            </li>
                            <li>
                                <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                    Test
                                    Tool
                                    Lookup</a>
                            </li>
                            <li>
                                <a href="index.php?page=pen-test-tool-lookup-ajax.php">Pen
                                    Test
                                    Tool
                                    Lookup
                                    (AJAX)</a>
                            </li>
                            <li>
                                <a href="./webservices/soap/ws-user-account.php">Lookup
                                    User
                                    (SOAP
                                    Web
                                    Service)</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        <ul>
            <li style="
                z-index: 922;
            ">
                <a href="" style="
                    padding-right: 23px;
                ">Web
                    Services<img src="src/images/right.gif" class="rightarrowclass" style="
                        border: 0;
                    " /></a>
                <ul style="
                    display: none;
                    top: 0px;
                    box-shadow: rgb(
                            170,
                            170,
                            170
                        )
                        5px
                        5px
                        5px;
                    visibility: visible;
                ">
                    <li style="
                        z-index: 921;
                    ">
                        <a href="">SOAP<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li style="
                                z-index: 920;
                            ">
                                <a href="">Test
                                    Page<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="./webservices/soap/ws-hello-world.php">Hello
                                            World</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 919;
                            ">
                                <a href="">Command
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="./webservices/soap/ws-lookup-dns-record.php">DNS
                                            Lookup</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 918;
                            ">
                                <a href="">SQL
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="./webservices/soap/ws-user-account.php">Lookup
                                            User</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 917;
                            ">
                                <a href="">Username
                                    Enumeration<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="./webservices/soap/ws-user-account.php">Lookup
                                            User</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 916;
                    ">
                        <a href="">REST<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li style="
                                z-index: 915;
                            ">
                                <a href="">SQL
                                    Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="./webservices/rest/ws-user-account.php">User
                                            Account
                                            Management</a>
                                    </li>
                                </ul>
                            </li>
                            <li style="
                                z-index: 914;
                            ">
                                <a href="">Username
                                    Enumeration<img src="src/images/right.gif" class="rightarrowclass" style="
                                        border: 0;
                                    " /></a>
                                <ul style="
                                    display: none;
                                    top: 0px;
                                    box-shadow: rgb(
                                            170,
                                            170,
                                            170
                                        )
                                        5px
                                        5px
                                        5px;
                                    visibility: visible;
                                ">
                                    <li>
                                        <a href="./webservices/rest/ws-user-account.php">User
                                            Account
                                            Management</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li style="
                z-index: 913;
            ">
                <a href="" style="
                    padding-right: 23px;
                ">Others<img src="src/images/right.gif" class="rightarrowclass" style="
                        border: 0;
                    " /></a>
                <ul style="
                    display: none;
                    top: 0px;
                    box-shadow: rgb(
                            170,
                            170,
                            170
                        )
                        5px
                        5px
                        5px;
                    visibility: visible;
                ">
                    <li style="
                        z-index: 912;
                    ">
                        <a href="">Cross-origin
                            Resource
                            Sharing
                            (CORS)<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=cors.php">Echo
                                    Message
                                    (CORS)</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 911;
                    ">
                        <a href="">Client-side
                            "Security"
                            Controls<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=client-side-control-challenge.php">Client-side
                                    Control
                                    Challenge</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 910;
                    ">
                        <a href="">Cross-Site
                            Framing<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=framing.php">Click-Jacking</a>
                            </li>
                            <li>
                                <a href="framer.html">Cross-Site
                                    Framing
                                    (Third-Party
                                    Framing)</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 909;
                    ">
                        <a href="">Tab-Nabbing<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=nice-tabby-cat.php">Tabby
                                    Cat</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 908;
                    ">
                        <a href="">Unrestricted
                            File
                            Upload<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=upload-file.php">File
                                    Upload</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 907;
                    ">
                        <a href="">Denial
                            of
                            Service<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="?page=text-file-viewer.php">Text
                                    File
                                    Viewer</a>
                            </li>
                            <li>
                                <a href="?page=show-log.php">Show
                                    Web
                                    Log</a>
                            </li>
                            <li></li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 906;
                    ">
                        <a href="">JavaScript
                            Validation
                            Bypass<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=login.php">Login</a>
                            </li>
                            <li>
                                <a href="index.php?page=user-info.php">User
                                    Info
                                    (SQL)</a>
                            </li>
                            <li>
                                <a href="index.php?page=user-info-xpath.php">User
                                    Info
                                    (XPath)</a>
                            </li>
                            <li>
                                <a href="index.php?page=add-to-your-blog.php">Add
                                    to
                                    your
                                    blog</a>
                            </li>
                            <li>
                                <a href="index.php?page=html5-storage.php">HTML5
                                    Web
                                    Storage</a>
                            </li>
                            <li>
                                <a href="index.php?page=dns-lookup.php">DNS
                                    Lookup</a>
                            </li>
                            <li>
                                <a href="index.php?page=echo.php">Echo
                                    Message</a>
                            </li>
                            <li>
                                <a href="index.php?page=cors.php">Echo
                                    Message
                                    (CORS)</a>
                            </li>
                            <li>
                                <a href="index.php?page=content-security-policy.php">Echo
                                    Message
                                    (CSP)</a>
                            </li>
                            <li>
                                <a href="index.php?page=repeater.php">Repeater</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="index.php?page=user-agent-impersonation.php">User-Agent
                            Impersonation</a>
                    </li>
                    <li style="
                        z-index: 905;
                    ">
                        <a href="">Data
                            Capture
                            Pages<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=capture-data.php">Data
                                    Capture</a>
                            </li>
                            <li>
                                <a href="index.php?page=captured-data.php">View
                                    Captured
                                    Data</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 904;
                    ">
                        <a href="">JSON
                            Web
                            Token
                            (JWT)<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=jwt.php">Current
                                    User
                                    Information</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li style="
                z-index: 903;
            ">
                <a href="" style="
                    padding-right: 23px;
                ">Labs<img src="src/images/right.gif" class="rightarrowclass" style="
                        border: 0;
                    " /></a>
                <ul style="
                    display: none;
                    top: 0px;
                    box-shadow: rgb(
                            170,
                            170,
                            170
                        )
                        5px
                        5px
                        5px;
                    visibility: visible;
                ">
                    <li style="
                        z-index: 902;
                    ">
                        <a href="">How
                            the
                            Web
                            Works<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-1.php">Lab
                                    1
                                    -
                                    Sending
                                    HTTP
                                    Requests
                                    with
                                    Netcat</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-2.php">Lab
                                    2
                                    -
                                    Capturing
                                    HTTP
                                    Packets
                                    with
                                    Wireshark</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-3.php">Lab
                                    3
                                    -
                                    Intercepting
                                    HTTP
                                    Requests
                                    and
                                    Responses</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-4.php">Lab
                                    4
                                    -
                                    Using
                                    Burp-Suite
                                    Proxy
                                    History</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-5.php">Lab
                                    5
                                    -
                                    Bypassing
                                    Client-side
                                    Security</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 901;
                    ">
                        <a href="">SQL
                            Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-6.php">Lab
                                    6
                                    -
                                    Testing
                                    for
                                    SQL
                                    Errors</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-7.php">Lab
                                    7
                                    -
                                    Using
                                    SQLi
                                    to
                                    Bypass
                                    Authentication</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-8.php">Lab
                                    8
                                    -
                                    Extracting
                                    data</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-9.php">Lab
                                    9
                                    -
                                    Finding
                                    Number
                                    of
                                    Columns</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-10.php">Lab
                                    10
                                    -
                                    Pivoting
                                    with
                                    SQL
                                    injection</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-11.php">Lab
                                    11
                                    -
                                    SQLMap</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 900;
                    ">
                        <a href="">Command
                            Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-12.php">Lab
                                    12
                                    -
                                    Extracting
                                    User
                                    Accounts
                                    with
                                    Command
                                    Injection</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-13.php">Lab
                                    13
                                    -
                                    Testing
                                    for
                                    Reverse
                                    Connection</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-14.php">Lab
                                    14
                                    -
                                    Reverse
                                    Bash
                                    Shell
                                    with
                                    Command
                                    Injection</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-15.php">Lab
                                    15
                                    -
                                    Reverse
                                    Meterpreter
                                    Shell
                                    with
                                    Command
                                    Injection</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-16.php">Lab
                                    16
                                    -
                                    Web
                                    Shell
                                    with
                                    Command
                                    injection</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 899;
                    ">
                        <a href="">Lightweight
                            Directory
                            Access
                            Protocol
                            (LDAP)
                            Injection<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-17.php">Lab
                                    17
                                    -
                                    Extract
                                    User
                                    Accounts
                                    with
                                    LDAP
                                    Injection</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 898;
                    ">
                        <a href="">Insecure
                            Direct
                            Object
                            Referece
                            (IDOR)<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-18.php">Lab
                                    18
                                    -
                                    Edit
                                    Another
                                    User's
                                    Profile</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-19.php">Lab
                                    19
                                    -
                                    Extracting
                                    User
                                    Accounts
                                    with
                                    IDOR</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-20.php">Lab
                                    20
                                    -
                                    Extracting
                                    User
                                    Accounts
                                    with
                                    Local
                                    File
                                    Inclusion</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-21.php">Lab
                                    21
                                    -
                                    Web
                                    Shell
                                    with
                                    Local
                                    File
                                    Inclusion
                                    (LFI)</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-22.php">Lab
                                    22
                                    -
                                    Web
                                    Shell
                                    with
                                    Remote
                                    File
                                    Inclusion
                                    (RFI)</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 897;
                    ">
                        <a href="">Open
                            Redirect<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-23.php">Lab
                                    23
                                    -
                                    Open
                                    Redirects
                                    -
                                    Part
                                    1</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-24.php">Lab
                                    24
                                    -
                                    Open
                                    Redirects
                                    -
                                    Part
                                    2</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 896;
                    ">
                        <a href="">Cross-site
                            Scripting
                            (XSS)<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-25.php">Lab
                                    25
                                    -
                                    Creating
                                    a
                                    Cross-site
                                    Script
                                    Proof
                                    of
                                    Concept
                                    (PoC)</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-26.php">Lab
                                    26
                                    -
                                    Browser
                                    Exploitation
                                    Framework
                                    (BeEF)</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-27.php">Lab
                                    27
                                    -
                                    Bypassing
                                    Client-side
                                    Defenses</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-28.php">Lab
                                    28
                                    -
                                    Defending
                                    Against
                                    Cross-site
                                    Scripting</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 895;
                    ">
                        <a href="">Cross-site
                            Request
                            Forgery
                            (CSRF)<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-29.php">Lab
                                    29
                                    -
                                    Voting
                                    for
                                    NMap</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-30.php">Lab
                                    30
                                    -
                                    Adding
                                    a
                                    Blog</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 894;
                    ">
                        <a href="">HTML5
                            Web
                            Storage<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-31.php">Lab
                                    31
                                    -
                                    Capturing
                                    HTML
                                    5
                                    Web
                                    Storage</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 893;
                    ">
                        <a href="">Session
                            Management<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-32.php">Lab
                                    32
                                    -
                                    Capture
                                    Session
                                    with
                                    XSS</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-33.php">Lab
                                    33
                                    -
                                    Intercepting
                                    Session
                                    Token
                                    using
                                    Network
                                    Sniffer</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-34.php">Lab
                                    34
                                    -
                                    Exfiltrating
                                    Data
                                    with
                                    XSS</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-35.php">Lab
                                    35
                                    -
                                    Capture
                                    Session
                                    with
                                    XSS</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-36.php">Lab
                                    36
                                    -
                                    Using
                                    a
                                    captured
                                    session
                                    token</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 892;
                    ">
                        <a href="">Cookie
                            Management<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-37.php">Lab
                                    37
                                    -
                                    Show
                                    Hints</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-38.php">Lab
                                    38
                                    -
                                    Privilege
                                    Escalation</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 891;
                    ">
                        <a href="">Password
                            Management<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-39.php">Lab
                                    39
                                    -
                                    Password
                                    Cracking</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-40.php">Lab
                                    40
                                    -
                                    Intercepting
                                    Clear-Text
                                    Credentials</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-41.php">Lab
                                    41
                                    -
                                    Hydra</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 890;
                    ">
                        <a href="">Input
                            Validation<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-42.php">Lab
                                    42
                                    -
                                    Input
                                    Validation</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-43.php">Lab
                                    43
                                    -
                                    File
                                    Identification</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 889;
                    ">
                        <a href="">Error
                            Handling<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-44.php">Lab
                                    44
                                    -
                                    Grabbing
                                    Server
                                    Banners</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-45.php">Lab
                                    45
                                    -
                                    Creating
                                    Injection
                                    Files</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-46.php">Lab
                                    46
                                    -
                                    Scanning
                                    with
                                    Nikto</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-47.php">Lab
                                    47
                                    -
                                    Testing
                                    for
                                    Errors</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 888;
                    ">
                        <a href="">Logging<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-48.php">Lab
                                    48
                                    -
                                    Log
                                    Poisoning</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-49.php">Lab
                                    49
                                    -
                                    Log
                                    Disclosure</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 887;
                    ">
                        <a href="">Server
                            Configuration<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-50.php">Lab
                                    50
                                    -
                                    Testing
                                    HTTP
                                    Response
                                    Headers</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-51.php">Lab
                                    51
                                    -
                                    Scanning
                                    with
                                    Nikto</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-52.php">Lab
                                    52
                                    -
                                    Scanning
                                    with
                                    SSLScan</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 886;
                    ">
                        <a href="">Content
                            Security
                            Policy
                            (CSP)<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-53.php">Lab
                                    53
                                    -
                                    Testing
                                    HTTP
                                    Response
                                    Headers</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-54.php">Lab
                                    54
                                    -
                                    Scanning
                                    with
                                    SSLScan</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-55.php">Lab
                                    55
                                    -
                                    Testing
                                    Content
                                    Security
                                    Policy
                                    (CSP)</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 885;
                    ">
                        <a href="">JSON
                            Web
                            Token
                            (JWT)
                            Security<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-56.php">Lab
                                    56
                                    -
                                    Session
                                    Timeout</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-57.php">Lab
                                    57
                                    -
                                    Missing
                                    Signature
                                    Validation</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-58.php">Lab
                                    58
                                    -
                                    Cracking
                                    Signature
                                    Password</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-59.php">Lab
                                    59
                                    -
                                    SQL
                                    Injection
                                    via
                                    JWT</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 884;
                    ">
                        <a href="">Cross-origin
                            Resource
                            Sharing
                            (CORS)<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-60.php">Lab
                                    60
                                    -
                                    Access
                                    Control
                                    Allow
                                    Origin
                                    Header</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-61.php">Lab
                                    61
                                    -
                                    Pre-Flight
                                    Requests</a>
                            </li>
                        </ul>
                    </li>
                    <li style="
                        z-index: 883;
                    ">
                        <a href="">Software
                            Composition
                            Analysis
                            (SCA)<img src="src/images/right.gif" class="rightarrowclass" style="
                                border: 0;
                            " /></a>
                        <ul style="
                            display: none;
                            top: 0px;
                            box-shadow: rgb(
                                    170,
                                    170,
                                    170
                                )
                                5px
                                5px
                                5px;
                            visibility: visible;
                        ">
                            <li>
                                <a href="index.php?page=labs/lab-62.php">Lab
                                    62
                                    -
                                    Retire.js</a>
                            </li>
                            <li>
                                <a href="index.php?page=labs/lab-63.php">Lab
                                    63
                                    -
                                    OWASP
                                    Depenency
                                    Check</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li style="
                z-index: 882;
            ">
                <a href="" style="
                    padding-right: 23px;
                ">Documentation<img src="src/images/right.gif" class="rightarrowclass" style="
                        border: 0;
                    " /></a>
                <ul style="
                    display: none;
                    top: 0px;
                    box-shadow: rgb(
                            170,
                            170,
                            170
                        )
                        5px
                        5px
                        5px;
                    visibility: visible;
                ">
                    <li>
                        <a href="index.php?page=documentation/installation.php">Installation
                            Instructions
                            (Linux)</a>
                    </li>
                    <li>
                        <a href="documentation/mutillidae-installation-on-xampp-win7.pdf"
                            target="_blank">Installation
                            Instructions
                            (Windows)</a>
                    </li>
                    <li>
                        <a href="index.php?page=documentation/usage-instructions.php">Usage
                            Instructions</a>
                    </li>
                    <li>
                        <a href="index.php?page=documentation/vulnerabilities.php">Listing
                            of
                            Vulnerabilities</a>
                    </li>
                    <li>
                        <a href="index.php?page=credits.php">Credits</a>
                    </li>
                    <li>
                        <a href="https://www.sans.org/reading-room/whitepapers/application/introduction-owasp-mutillidae-ii-web-pen-test-training-environment-34380"
                            target="_blank">
                            Whitepaper:
                            Introduction
                            to
                            the
                            Mutillidae
                            Web
                            Pen
                            Test
                            Training
                            Environment
                        </a>
                    </li>
                </ul>
            </li>
            <li style="
                z-index: 881;
            ">
                <a href="" style="
                    padding-right: 23px;
                ">Resources<img src="src/images/right.gif" class="rightarrowclass" style="
                        border: 0;
                    " /></a>
                <ul style="
                    display: none;
                    top: 0px;
                    box-shadow: rgb(
                            170,
                            170,
                            170
                        )
                        5px
                        5px
                        5px;
                    visibility: visible;
                ">
                    <li>
                        <a href="https://github.com/webpwnized/mutillidae" target="_blank">
                            Latest
                            Version
                            of
                            OWASP
                            Mutillidae
                            II
                        </a>
                    </li>
                    <li>
                        <a href="https://www.owasp.org/index.php/Top_Ten" target="_blank">
                            OWASP
                            Top
                            Ten
                        </a>
                    </li>
                    <li>
                        <a href="https://addons.mozilla.org/en-US/firefox/collections/jdruin/pro-web-developer-qa-pack/"
                            target="_blank">
                            Web
                            Penetration
                            Testing
                            Add-Ons
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <div>&nbsp;</div>
    <div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="45R3YEXENU97S" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit"
                alt="Donate Today!" />
            <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
        Want to Help?
    </div>
    <div>&nbsp;</div>
    <div>
        <a href="http://www.youtube.com/user/webpwnized" target="_blank">
            <img alt="Webpwnized YouTube Channel" src="src/images/youtube-play-icon-40-40.png" />
            <br />
            Video Tutorials
        </a>
    </div>
    <div>&nbsp;</div>
    <div>
        <a href="https://twitter.com/webpwnized" target="_blank">
            <img alt="Webpwnized Twitter Channel" src="src/images/twitter-bird-48-48.png" />
            <br />
            Announcements
        </a>
    </div>
    <div>&nbsp;</div>
    <div>
        <a href="https://www.sans.org/reading-room/whitepapers/application/introduction-owasp-mutillidae-ii-web-pen-test-training-environment-34380"
            target="_blank"
            title="Whitepaper: Introduction to OWASP Mutillidae II Web Pen Test Training Environment">
            <img alt="Webpwnized Twitter Channel" src="src/images/pdf-icon-48-48.png" align="middle" />
            <br />
            Getting Started
        </a>
    </div>
    <div>&nbsp;</div>

      `;
        let menuOthers =`
      <div id="smoothmenu1" class="ddsmoothmenu">
      <ul>
          <li style="
              z-index: 1000;
          ">
              <a href="" style="
                  padding-right: 23px;
              ">OWASP
                  2017<img src="../src/images/right.gif" class="rightarrowclass" style="
                      border: 0;
                  " /></a>
              <ul style="
                  display: none;
                  top: 0px;
                  box-shadow: rgb(
                          170,
                          170,
                          170
                      )
                      5px
                      5px
                      5px;
                  visibility: visible;
              ">
                  <li style="
                      z-index: 999;
                  ">
                      <a href="">A1
                          -
                          Injection
                          (SQL)<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li style="
                              z-index: 998;
                          ">
                              <a href="">SQLi
                                  -
                                  Extract
                                  Data<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=user-info.php">User
                                          Info
                                          (SQL)</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 997;
                          ">
                              <a href="">SQLi
                                  -
                                  Bypass
                                  Authentication<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=login.php">Login</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 996;
                          ">
                              <a href="">SQLi
                                  -
                                  Insert
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="?page=add-to-your-blog.php">Add
                                          to
                                          your
                                          blog</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=register.php">Register</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=captured-data.php">View
                                          Captured
                                          Data</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 995;
                          ">
                              <a href="">Blind
                                  SQL
                                  via
                                  Timing<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=login.php">Login</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-info.php">User
                                          Info
                                          (SQL)</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 994;
                          ">
                              <a href="">SQLMAP
                                  Practice<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=sqlmap-targets.php">SQLMAP
                                          Practice
                                          Targets</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=login.php">Login</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=view-someones-blog.php">View
                                          Someones
                                          Blog</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-info.php">User
                                          Info
                                          (SQL)</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 993;
                          ">
                              <a href="">Via
                                  JavaScript
                                  Object
                                  Notation
                                  (JSON)<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                          Test
                                          Tool
                                          Lookup</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=pen-test-tool-lookup-ajax.php">Pen
                                          Test
                                          Tool
                                          Lookup
                                          (AJAX)</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 992;
                          ">
                              <a href="">Via
                                  SOAP
                                  Web
                                  Service<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="./webservices/soap/ws-user-account.php">Lookup
                                          User</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 991;
                          ">
                              <a href="">Via
                                  REST
                                  Web
                                  Service<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="./webservices/rest/ws-user-account.php">User
                                          Account
                                          Management</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 990;
                  ">
                      <a href="">A1
                          -
                          Injection
                          (Other)<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li style="
                              z-index: 989;
                          ">
                              <a href="">Application
                                  Log
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=add-to-your-blog.php">Add
                                          to
                                          your
                                          blog</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=dns-lookup.php">DNS
                                          Lookup</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=echo.php">Echo
                                          Message</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=cors.php">Echo
                                          Message
                                          (CORS)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=content-security-policy.php">Echo
                                          Message
                                          (CSP)</a>
                                  </li>
                                  <li>
                                      <a
                                          href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                          Viewer</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=capture-data.php">Capture
                                          Data
                                          Page</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=login.php">Login</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=register.php">Register
                                          User</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=source-viewer.php">Source
                                          Viewer</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=text-file-viewer.php">Text
                                          File
                                          Viewer</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 988;
                          ">
                              <a href="">Buffer
                                  Overflow<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=repeater.php">Repeater</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 987;
                          ">
                              <a href="">Cascading
                                  Style
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=set-background-color.php">Set
                                          Background
                                          Color</a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a
                                  href="index.php?page=view-user-privilege-level.php&amp;iv=6bc24fc1ab650b25b4114e93a98f1eba">CBC-bit
                                  Flipping</a>
                          </li>
                          <li style="
                              z-index: 986;
                          ">
                              <a href="">Command
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=dns-lookup.php">DNS
                                          Lookup</a>
                                  </li>
                                  <li>
                                      <a href="./webservices/soap/ws-lookup-dns-record.php">DNS
                                          Lookup
                                          (SOAP
                                          Web
                                          Service)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=echo.php">Echo
                                          Message</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=cors.php">Echo
                                          Message
                                          (CORS)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=content-security-policy.php">Echo
                                          Message
                                          (CSP)</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 985;
                          ">
                              <a href="">Frame
                                  Source
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a
                                          href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                          Viewer</a>
                                  </li>
                                  <li>
                                      <a
                                          href="index.php?page=styling-frame.php&amp;page-to-frame=styling.php%3Fpage-title%3DStyling+with+Mutillidae">Styling
                                          with
                                          Mutilidae</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 984;
                          ">
                              <a href="">HTML
                                  Injection
                                  (HTMLi)<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=add-to-your-blog.php">Add
                                          to
                                          your
                                          blog</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=browser-info.php">Browser
                                          Info</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=dns-lookup.php">DNS
                                          Lookup</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=echo.php">Echo
                                          Message</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=cors.php">Echo
                                          Message
                                          (CORS)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=content-security-policy.php">Echo
                                          Message
                                          (CSP)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                          Test
                                          Tool
                                          Lookup</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=text-file-viewer.php">Text
                                          File
                                          Viewer</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-info.php">User
                                          Info
                                          (SQL)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-info-xpath.php">User
                                          Info
                                          (XPath)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=set-background-color.php">Set
                                          Background
                                          Color</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=html5-storage.php">HTML5
                                          Web
                                          Storage</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=capture-data.php">Capture
                                          Data
                                          Page</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=captured-data.php">View
                                          Captured
                                          Data</a>
                                  </li>
                                  <li>
                                      <a
                                          href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                          Viewer</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=arbitrary-file-inclusion.php">Arbitrary
                                          File
                                          Inclusion</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-poll.php">Poll
                                          Question</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=register.php">Register
                                          User</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=login.php">Login</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=back-button-discussion.php">Those
                                          "Back"
                                          Buttons</a>
                                  </li>
                                  <li>
                                      <a
                                          href="index.php?page=styling-frame.php&amp;page-to-frame=styling.php%3Fpage-title%3DStyling+with+Mutillidae">Styling
                                          with
                                          Mutilidae</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=password-generator.php&amp;username=anonymous">Password
                                          Generator</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 983;
                          ">
                              <a href="">HTMLi
                                  via
                                  HTTP
                                  Headers<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=back-button-discussion.php">Those
                                          "Back"
                                          Buttons</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=browser-info.php">Browser
                                          Info</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=site-footer-xss-discussion.php">Site
                                          Footer</a>
                                  </li>
                                  <li></li>
                                  <li>
                                      <a href="">HTTP
                                          Response
                                          Splitting
                                          (Hint:
                                          Difficult)</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 982;
                          ">
                              <a href="">HTMLi
                                  Via
                                  DOM
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=html5-storage.php">HTML5
                                          Web
                                          Storage</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=password-generator.php&amp;username=anonymous">Password
                                          Generator</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 981;
                          ">
                              <a href="">HTMLi
                                  Via
                                  Cookie
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=capture-data.php">Capture
                                          Data
                                          Page</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 980;
                          ">
                              <a href="">HTTP
                                  Parameter
                                  Pollution<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=user-poll.php">Poll
                                          Question</a>
                                  </li>
                                  <li>
                                      <a
                                          href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                          Viewer</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 979;
                          ">
                              <a href="">JavaScript
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=back-button-discussion.php">Those
                                          "Back"
                                          Buttons</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=password-generator.php&amp;username=anonymous">Password
                                          Generator</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=browser-info.php">Browser
                                          Info</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 978;
                          ">
                              <a href="">JavaScript
                                  Object
                                  Notation
                                  (JSON)
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                          Test
                                          Tool
                                          Lookup</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=pen-test-tool-lookup-ajax.php">Pen
                                          Test
                                          Tool
                                          Lookup
                                          (AJAX)</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 977;
                          ">
                              <a href="">LDAP
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=conference-room-lookup.php">Conference
                                          Room
                                          Lookup</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 976;
                          ">
                              <a href="">Parameter
                                  Addition<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=repeater.php">Repeater</a>
                                  </li>
                                  <li>
                                      <a
                                          href="index.php?page=view-user-privilege-level.php&amp;iv=6bc24fc1ab650b25b4114e93a98f1eba">View
                                          User
                                          Privileges</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 975;
                          ">
                              <a href="">XML
                                  External
                                  Entity
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=xml-validator.php">XML
                                          Validator</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 974;
                          ">
                              <a href="">XML
                                  Entity
                                  Expansion<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=xml-validator.php">XML
                                          Validator</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 973;
                          ">
                              <a href="">XML
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=xml-validator.php">XML
                                          Validator</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 972;
                          ">
                              <a href="">XPath
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=user-info-xpath.php">User
                                          Info
                                          (XPath)</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 971;
                  ">
                      <a href="">
                          A2
                          -
                          Broken
                          Authentication
                          and
                          Session
                          Management
                          <img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li style="
                              z-index: 970;
                          ">
                              <a href="">Authentication
                                  Bypass<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=login.php">Via
                                          Brute
                                          Force</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=privilege-escalation.php">Via
                                          Cookies</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=login.php">Via
                                          SQL
                                          Injection</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=edit-account-profile.php">Via
                                          Account
                                          Hijacking</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 969;
                          ">
                              <a href="">Priviliege
                                  Escalation<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=privilege-escalation.php">Via
                                          Cookies</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=login.php">Login</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=edit-account-profile.php">Via
                                          Account
                                          Hijacking</a>
                                  </li>
                                  <li>
                                      <a
                                          href="index.php?page=view-user-privilege-level.php&amp;iv=6bc24fc1ab650b25b4114e93a98f1eba">Via
                                          CBC-bit
                                          Flipping</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 968;
                          ">
                              <a href="">Username
                                  Enumeration<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=login.php">Login</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=edit-account-profile.php">Edit
                                          User
                                          Profile</a>
                                  </li>
                                  <li>
                                      <a href="./webservices/soap/ws-user-account.php">Lookup
                                          User
                                          (SOAP
                                          Web
                                          Service)</a>
                                  </li>
                                  <li>
                                      <a href="./webservices/rest/ws-user-account.php">User
                                          Account
                                          Management
                                          (REST
                                          Web
                                          Service)</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 967;
                          ">
                              <a href="">JSON
                                  Web
                                  Token
                                  (JWT)<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=jwt.php">Current
                                          User
                                          Information</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 966;
                  ">
                      <a href="">A3
                          -
                          Sensitive
                          Data
                          Exposure<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li style="
                              z-index: 965;
                          ">
                              <a href="">Information
                                  Disclosure<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=edit-account-profile.php">Edit
                                          User
                                          Profile</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=phpinfo.php">PHP
                                          Info
                                          Page</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=robots-txt.php">Robots.txt</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=secret-administrative-pages.php">"Secret"
                                          Administrative
                                          Pages</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=html5-storage.php">HTML5
                                          Web
                                          Storage</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=client-side-comments.php">HTML/JavaScript
                                          Comments</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=cache-control.php">Cache-Control</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=framing.php">Click-Jacking</a>
                                  </li>
                                  <li>
                                      <a href="framer.html">Cross-Site
                                          Framing</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=framing.php">X-Frame-Options
                                          (Click-Jacking)</a>
                                  </li>
                                  <li>
                                      <a href="framer.html">X-Frame-Options
                                          (Cross-frame
                                          Scripting)</a>
                                  </li>
                              </ul>
                          </li>

                          <li style="
                              z-index: 964;
                          ">
                              <a href="">Application
                                  Path
                                  Disclosure<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=phpinfo.php">PHP
                                          Info
                                          Page</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=robots-txt.php">Robots.txt</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 963;
                          ">
                              <a href="">Platform
                                  Path
                                  Disclosure<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=phpinfo.php">PHP
                                          Info
                                          Page</a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a href="index.php?page=ssl-misconfiguration.php">SSL
                                  Misconfiguration</a>
                          </li>
                          <li style="
                              z-index: 962;
                          ">
                              <a href="">JSON
                                  Web
                                  Token
                                  (JWT)<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=jwt.php">Current
                                          User
                                          Information</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 961;
                  ">
                      <a href="">A4
                          -
                          XML
                          External
                          Entities<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li style="
                              z-index: 960;
                          ">
                              <a href="">XML
                                  External
                                  Entity
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=xml-validator.php">XML
                                          Validator</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 959;
                  ">
                      <a href="">A5
                          -
                          Broken
                          Access
                          Control<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li style="
                              z-index: 958;
                          ">
                              <a href="">Insecure
                                  Direct
                                  Object
                                  References<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=edit-account-profile.php">Via
                                          Account
                                          Hijacking</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=arbitrary-file-inclusion.php">Local
                                          File
                                          Inclusion</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=arbitrary-file-inclusion.php">Remote
                                          File
                                          Inclusion</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=text-file-viewer.php">Text
                                          File
                                          Viewer</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=source-viewer.php">Source
                                          Viewer</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=credits.php">Credits</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 957;
                          ">
                              <a href="">Missing
                                  Function
                                  Level
                                  Access
                                  Control<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=privilege-escalation.php">Cookies
                                          as
                                          Auth
                                          Tokens</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=secret-administrative-pages.php">"Secret"
                                          Administrative
                                          Pages</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=client-side-control-challenge.php">Client-side
                                          Control
                                          Challenge</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=robots-txt.php">Robots.txt</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 956;
                          ">
                              <a href="">JSON
                                  Web
                                  Token
                                  (JWT)<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=jwt.php">Current
                                          User
                                          Information</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 955;
                          ">
                              <a href="">Cross-origin
                                  Resource
                                  Sharing
                                  (CORS)<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=cors.php">Echo
                                          Message
                                          (CORS)</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 954;
                  ">
                      <a href="">A6
                          -
                          Security
                          Misconfiguration<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li style="
                              z-index: 953;
                          ">
                              <a href="">Cross-origin
                                  Resource
                                  Sharing
                                  (CORS)<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=cors.php">Echo
                                          Message
                                          (CORS)</a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a href="index.php?page=directory-browsing.php">Directory
                                  Browsing</a>
                          </li>
                          <li style="
                              z-index: 952;
                          ">
                              <a href="">Method
                                  Tampering
                                  (GET
                                  for
                                  POST)<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=add-to-your-blog.php">Add
                                          to
                                          your
                                          blog</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-info.php">User
                                          Info
                                          (SQL)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-info-xpath.php">User
                                          Info
                                          (XPath)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-poll.php">Poll
                                          Question</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=dns-lookup.php">DNS
                                          Lookup</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=echo.php">Echo
                                          Message</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=cors.php">Echo
                                          Message
                                          (CORS)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=content-security-policy.php">Echo
                                          Message
                                          (CSP)</a>
                                  </li>
                              </ul>
                          </li>

                          <li style="
                              z-index: 951;
                          ">
                              <a href="">HTTP
                                  Headers<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=cors.php">Cross-Origin
                                          Resource
                                          Sharing
                                          (CORS)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=cache-control.php">Cache-Control</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=framing.php">Click-Jacking</a>
                                  </li>
                                  <li>
                                      <a href="framer.html">Cross-Site
                                          Framing
                                          (Third-Party
                                          Framing)</a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a href="index.php?page=user-agent-impersonation.php">User-Agent
                                  Impersonation</a>
                          </li>
                          <li>
                              <a href="index.php?page=upload-file.php">Unrestricted
                                  File
                                  Upload</a>
                          </li>
                          <li>
                              <a href="index.php?page=ssl-misconfiguration.php">SSL
                                  Misconfiguration</a>
                          </li>
                          <li>
                              <a href="index.php?page=phpinfo.php">PHP
                                  Info
                                  Page</a>
                          </li>
                          <li>
                              <a href="index.php?page=robots-txt.php">Robots.txt</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 950;
                  ">
                      <a href="">A7
                          -
                          Cross
                          Site
                          Scripting
                          (XSS)<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li style="
                              z-index: 949;
                          ">
                              <a href="">Reflected
                                  (First
                                  Order)<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=dns-lookup.php">DNS
                                          Lookup</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=echo.php">Echo
                                          Message</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=cors.php">Echo
                                          Message
                                          (CORS)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=content-security-policy.php">Echo
                                          Message
                                          (CSP)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                          Test
                                          Tool
                                          Lookup</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=text-file-viewer.php">Text
                                          File
                                          Viewer</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-info.php">User
                                          Info
                                          (SQL)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=set-background-color.php">Set
                                          Background
                                          Color</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=html5-storage.php">HTML5
                                          Web
                                          Storage</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=capture-data.php">Capture
                                          Data
                                          Page</a>
                                  </li>
                                  <li>
                                      <a
                                          href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                          Viewer</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=arbitrary-file-inclusion.php">Arbitrary
                                          File
                                          Inclusion</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=xml-validator.php">XML
                                          Validator</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-info-xpath.php">User
                                          Info
                                          (XPath)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-poll.php">Poll
                                          Question</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=register.php">Register
                                          User</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=browser-info.php">Browser
                                          Info</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=back-button-discussion.php">Those
                                          "Back"
                                          Buttons</a>
                                  </li>
                                  <li>
                                      <a
                                          href="index.php?page=styling-frame.php&amp;page-to-frame=styling.php%3Fpage-title%3DStyling+with+Mutillidae">Styling
                                          with
                                          Mutilidae</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=password-generator.php&amp;username=anonymous">Password
                                          Generator</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=client-side-control-challenge.php">Client-side
                                          Control
                                          Challenge</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 948;
                          ">
                              <a href="">Persistent
                                  (Second
                                  Order)<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=add-to-your-blog.php">Add
                                          to
                                          your
                                          blog</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=view-someones-blog.php">View
                                          someone's
                                          blog</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=register.php">Register
                                          User</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=edit-account-profile.php">Edit
                                          User
                                          Profile</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=show-log.php">Show
                                          Log</a>
                                  </li>
                                  <li></li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 947;
                          ">
                              <a href="">DOM-Based<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=html5-storage.php">HTML5
                                          Web
                                          Storage</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=password-generator.php&amp;username=anonymous">Password
                                          Generator</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 946;
                          ">
                              <a href="" target="_blank">Cross
                                  Site
                                  Request
                                  Forgery
                                  (CSRF)<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=add-to-your-blog.php">Add
                                          to
                                          your
                                          blog</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=register.php">Register
                                          User</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-poll.php">Poll
                                          Question</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 945;
                          ">
                              <a href="">Via
                                  "Input"
                                  (GET/POST)<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=add-to-your-blog.php">Add
                                          to
                                          your
                                          blog</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=view-someones-blog.php">View
                                          someone's
                                          blog</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=show-log.php">Show
                                          Log</a>
                                  </li>
                                  <li></li>
                                  <li>
                                      <a href="index.php?page=text-file-viewer.php">Text
                                          File
                                          Viewer</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=dns-lookup.php">DNS
                                          Lookup</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=echo.php">Echo
                                          Message</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=cors.php">Echo
                                          Message
                                          (CORS)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=content-security-policy.php">Echo
                                          Message
                                          (CSP)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-info.php">User
                                          Info
                                          (SQL)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-info-xpath.php">User
                                          Info
                                          (XPath)</a>
                                  </li>
                                  <li>
                                      <a href="index.php">Missing
                                          HTTPOnly
                                          Attribute</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=set-background-color.php">Set
                                          Background
                                          Color</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                          Test
                                          Tool
                                          Lookup</a>
                                  </li>
                                  <li>
                                      <a
                                          href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                          Viewer</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 944;
                          ">
                              <a href="">Via
                                  HTTP
                                  Headers<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=browser-info.php">Browser
                                          Info</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=show-log.php">Show
                                          Log</a>
                                  </li>
                                  <li></li>
                                  <li>
                                      <a href="index.php?page=site-footer-xss-discussion.php">Site
                                          Footer</a>
                                  </li>
                                  <li></li>
                                  <li>
                                      <a href="index.php?page=back-button-discussion.php">Those
                                          "Back"
                                          Buttons</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 943;
                          ">
                              <a href="">Via
                                  HTTP
                                  Attribute<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a
                                          href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                          Viewer</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 942;
                          ">
                              <a href="">Via
                                  Misconfiguration<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php">Missing
                                          HTTPOnly
                                          Attribute</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 941;
                          ">
                              <a href="">Against
                                  HTML5
                                  Web
                                  Storage<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=html5-storage.php">HTML5
                                          Web
                                          Storage</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 940;
                          ">
                              <a href="">Against
                                  JSON<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                          Test
                                          Tool
                                          Lookup</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 939;
                          ">
                              <a href="">Via
                                  Cookie
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=capture-data.php">Capture
                                          Data
                                          Page</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 938;
                          ">
                              <a href="">Via
                                  XML
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=xml-validator.php">XML
                                          Validator</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 937;
                          ">
                              <a href="">Via
                                  XPath
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=user-info-xpath.php">User
                                          Info
                                          (XPath)</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 936;
                          ">
                              <a href="">Via
                                  Path
                                  Relative
                                  Style
                                  Sheet
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a
                                          href="index.php?page=styling-frame.php&amp;page-to-frame=styling.php%3Fpage-title%3DStyling+with+Mutillidae">Styling
                                          with
                                          Mutilidae</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 935;
                          ">
                              <a href="">BeeF
                                  Framework
                                  Targets<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="index.php?page=add-to-your-blog.php">Add
                                          to
                                          your
                                          blog</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=view-someones-blog.php">View
                                          someone's
                                          blog</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=show-log.php">Show
                                          Log</a>
                                  </li>
                                  <li></li>
                                  <li>
                                      <a href="index.php?page=dns-lookup.php">DNS
                                          Lookup</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=echo.php">Echo
                                          Message</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=cors.php">Echo
                                          Message
                                          (CORS)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=content-security-policy.php">Echo
                                          Message
                                          (CSP)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                          Test
                                          Tool
                                          Lookup</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=text-file-viewer.php">Text
                                          File
                                          Viewer</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-info.php">User
                                          Info
                                          (SQL)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=set-background-color.php">Set
                                          Background
                                          Color</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=html5-storage.php">HTML5
                                          Web
                                          Storage</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=capture-data.php">Capture
                                          Data
                                          Page</a>
                                  </li>
                                  <li>
                                      <a
                                          href="index.php?page=document-viewer.php&amp;PathToDocument=documentation/how-to-access-Mutillidae-over-Virtual-Box-network.php">Document
                                          Viewer</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=arbitrary-file-inclusion.php">Arbitrary
                                          File
                                          Inclusion</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=xml-validator.php">XML
                                          Validator</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-info-xpath.php">User
                                          Info
                                          (XPath)</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=user-poll.php">Poll
                                          Question</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=register.php">Register
                                          User</a>
                                  </li>
                                  <li>
                                      <a href="index.php?page=password-generator.php&amp;username=anonymous">Password
                                          Generator</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="">A8
                          -
                          Insecure
                          Deserialization</a>
                  </li>
                  <li style="
                      z-index: 934;
                  ">
                      <a href="">A9
                          -
                          Using
                          Components
                          with
                          Known
                          Vulnerabilities<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=phpinfo.php">PHP
                                  Info
                                  Page</a>
                          </li>
                          <li>
                              <a
                                  href="index.php?page=view-user-privilege-level.php&amp;iv=6bc24fc1ab650b25b4114e93a98f1eba">CBC-bit
                                  Flipping</a>
                          </li>
                          <li>
                              <a href="index.php?page=ssl-misconfiguration.php">SSL
                                  Misconfiguration</a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="">A10
                          -
                          Insufficient
                          Logging
                          and
                          Monitoring</a>
                  </li>
              </ul>
          </li>
      </ul>
      <ul>
          <li style="
              z-index: 933;
          ">
              <a href="" style="
                  padding-right: 23px;
              ">OWASP
                  2013<img src="../src/images/right.gif" class="rightarrowclass" style="
                      border: 0;
                  " /></a>
              <ul style="
                  display: none;
                  top: 0px;
                  box-shadow: rgb(
                          170,
                          170,
                          170
                      )
                      5px
                      5px
                      5px;
                  visibility: visible;
              ">
                  <li style="
                      z-index: 932;
                  ">
                      <a href="">A8
                          -
                          Cross
                          Site
                          Request
                          Forgery
                          (CSRF)<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=add-to-your-blog.php">Add
                                  to
                                  your
                                  blog</a>
                          </li>
                          <li>
                              <a href="index.php?page=register.php">Register
                                  User</a>
                          </li>
                          <li>
                              <a href="index.php?page=user-poll.php">Poll
                                  Question</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 931;
                  ">
                      <a href="">A10
                          -
                          Unvalidated
                          Redirects
                          and
                          Forwards<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="?page=credits.php">Credits</a>
                          </li>
                          <li>
                              <a href="">Setup/reset
                                  the
                                  DB
                                  (Disabled:
                                  Not
                                  Admin)</a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
      </ul>
      <ul>
          <li style="
              z-index: 930;
          ">
              <a href="" style="
                  padding-right: 23px;
              ">OWASP
                  2010<img src="../src/images/right.gif" class="rightarrowclass" style="
                      border: 0;
                  " /></a>
              <ul style="
                  display: none;
                  top: 0px;
                  box-shadow: rgb(
                          170,
                          170,
                          170
                      )
                      5px
                      5px
                      5px;
                  visibility: visible;
              ">
                  <li style="
                      z-index: 929;
                  ">
                      <a href="">A7
                          -
                          Insecure
                          Cryptographic
                          Storage<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=user-info.php">User
                                  Info
                                  (SQL)</a>
                          </li>
                          <li>
                              <a href="index.php?page=user-info-xpath.php">User
                                  Info
                                  (XPath)</a>
                          </li>
                          <li>
                              <a href="index.php?page=html5-storage.php">HTML5
                                  Web
                                  Storage</a>
                          </li>
                          <li>
                              <a
                                  href="index.php?page=view-user-privilege-level.php&amp;iv=6bc24fc1ab650b25b4114e93a98f1eba">View
                                  User
                                  Privileges</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 928;
                  ">
                      <a href="">A8
                          -
                          Failure
                          to
                          Restrict
                          URL
                          Access<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=edit-account-profile.php">Edit
                                  User
                                  Profile</a>
                          </li>
                          <li>
                              <a href="index.php?page=source-viewer.php">Source
                                  Viewer</a>
                          </li>
                          <li>
                              <a href="index.php?page=secret-administrative-pages.php">"Secret"
                                  Administrative
                                  Pages</a>
                          </li>
                          <li>
                              <a href="index.php?page=robots-txt.php">Robots.txt</a>
                          </li>
                          <li>
                              <a href="index.php?page=arbitrary-file-inclusion.php">Arbitrary
                                  File
                                  Inclusion</a>
                          </li>
                          <li>
                              <a href="index.php?page=phpinfo.php">PHP
                                  Info
                                  Page</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 927;
                  ">
                      <a href="">A9
                          -
                          Insufficient
                          Transport
                          Layer
                          Protection<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=ssl-misconfiguration.php">SSL
                                  Misconfiguration</a>
                          </li>
                          <li>
                              <a href="index.php?page=login.php">Login</a>
                          </li>
                          <li>
                              <a href="index.php?page=user-info.php">User
                                  Info
                                  (SQL)</a>
                          </li>
                          <li>
                              <a href="index.php?page=user-info-xpath.php">User
                                  Info
                                  (XPath)</a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
      </ul>
      <ul>
          <li style="
              z-index: 926;
          ">
              <a href="" style="
                  padding-right: 23px;
              ">OWASP
                  2007<img src="../src/images/right.gif" class="rightarrowclass" style="
                      border: 0;
                  " /></a>
              <ul style="
                  display: none;
                  top: 0px;
                  box-shadow: rgb(
                          170,
                          170,
                          170
                      )
                      5px
                      5px
                      5px;
                  visibility: visible;
              ">
                  <li style="
                      z-index: 925;
                  ">
                      <a href="">A3
                          -
                          Malicious
                          File
                          Execution<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=text-file-viewer.php">Text
                                  File
                                  Viewer</a>
                          </li>
                          <li>
                              <a href="index.php?page=source-viewer.php">Source
                                  Viewer</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 924;
                  ">
                      <a href="">A6
                          -
                          Information
                          Leakage<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=edit-account-profile.php">Edit
                                  User
                                  Profile</a>
                          </li>
                          <li>
                              <a href="index.php">Cache-Control</a>
                          </li>
                          <li>
                              <a href="index.php">X-Powered-By
                                  HTTP
                                  Header</a>
                          </li>
                          <li>
                              <a href="index.php?page=client-side-comments.php">HTML/JavaScript
                                  Comments</a>
                          </li>
                          <li>
                              <a href="index.php?page=framing.php">Click-Jacking</a>
                          </li>
                          <li>
                              <a href="framer.html">Cross-Site
                                  Framing
                                  (Third-Party
                                  Framing)</a>
                          </li>
                          <li>
                              <a href="index.php?page=html5-storage.php">HTML5
                                  Web
                                  Storage</a>
                          </li>
                          <li>
                              <a href="index.php?page=phpinfo.php">PHP
                                  Info
                                  Page</a>
                          </li>
                          <li>
                              <a href="index.php?page=robots-txt.php">Robots.txt</a>
                          </li>
                          <li>
                              <a href="index.php?page=ssl-misconfiguration.php">SSL
                                  Misconfiguration</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 923;
                  ">
                      <a href="">A6
                          -
                          Improper
                          Error
                          Handling<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=user-info.php">User
                                  Info
                                  (SQL)</a>
                          </li>
                          <li>
                              <a href="index.php?page=user-info-xpath.php">User
                                  Info
                                  (XPath)</a>
                          </li>
                          <li>
                              <a href="index.php?page=login.php">Login</a>
                          </li>
                          <li>
                              <a href="index.php?page=register.php">Register</a>
                          </li>
                          <li>
                              <a href="index.php?page=edit-account-profile.php">Edit
                                  User
                                  Profile</a>
                          </li>
                          <li>
                              <a href="index.php?page=pen-test-tool-lookup.php">Pen
                                  Test
                                  Tool
                                  Lookup</a>
                          </li>
                          <li>
                              <a href="index.php?page=pen-test-tool-lookup-ajax.php">Pen
                                  Test
                                  Tool
                                  Lookup
                                  (AJAX)</a>
                          </li>
                          <li>
                              <a href="./webservices/soap/ws-user-account.php">Lookup
                                  User
                                  (SOAP
                                  Web
                                  Service)</a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
      </ul>
      <ul>
          <li style="
              z-index: 922;
          ">
              <a href="" style="
                  padding-right: 23px;
              ">Web
                  Services<img src="../src/images/right.gif" class="rightarrowclass" style="
                      border: 0;
                  " /></a>
              <ul style="
                  display: none;
                  top: 0px;
                  box-shadow: rgb(
                          170,
                          170,
                          170
                      )
                      5px
                      5px
                      5px;
                  visibility: visible;
              ">
                  <li style="
                      z-index: 921;
                  ">
                      <a href="">SOAP<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li style="
                              z-index: 920;
                          ">
                              <a href="">Test
                                  Page<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="./webservices/soap/ws-hello-world.php">Hello
                                          World</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 919;
                          ">
                              <a href="">Command
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="./webservices/soap/ws-lookup-dns-record.php">DNS
                                          Lookup</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 918;
                          ">
                              <a href="">SQL
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="./webservices/soap/ws-user-account.php">Lookup
                                          User</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 917;
                          ">
                              <a href="">Username
                                  Enumeration<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="./webservices/soap/ws-user-account.php">Lookup
                                          User</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 916;
                  ">
                      <a href="">REST<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li style="
                              z-index: 915;
                          ">
                              <a href="">SQL
                                  Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="./webservices/rest/ws-user-account.php">User
                                          Account
                                          Management</a>
                                  </li>
                              </ul>
                          </li>
                          <li style="
                              z-index: 914;
                          ">
                              <a href="">Username
                                  Enumeration<img src="../src/images/right.gif" class="rightarrowclass" style="
                                      border: 0;
                                  " /></a>
                              <ul style="
                                  display: none;
                                  top: 0px;
                                  box-shadow: rgb(
                                          170,
                                          170,
                                          170
                                      )
                                      5px
                                      5px
                                      5px;
                                  visibility: visible;
                              ">
                                  <li>
                                      <a href="./webservices/rest/ws-user-account.php">User
                                          Account
                                          Management</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
          <li style="
              z-index: 913;
          ">
              <a href="" style="
                  padding-right: 23px;
              ">Others<img src="../src/images/right.gif" class="rightarrowclass" style="
                      border: 0;
                  " /></a>
              <ul style="
                  display: none;
                  top: 0px;
                  box-shadow: rgb(
                          170,
                          170,
                          170
                      )
                      5px
                      5px
                      5px;
                  visibility: visible;
              ">
                  <li style="
                      z-index: 912;
                  ">
                      <a href="">Cross-origin
                          Resource
                          Sharing
                          (CORS)<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=cors.php">Echo
                                  Message
                                  (CORS)</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 911;
                  ">
                      <a href="">Client-side
                          "Security"
                          Controls<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=client-side-control-challenge.php">Client-side
                                  Control
                                  Challenge</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 910;
                  ">
                      <a href="">Cross-Site
                          Framing<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=framing.php">Click-Jacking</a>
                          </li>
                          <li>
                              <a href="framer.html">Cross-Site
                                  Framing
                                  (Third-Party
                                  Framing)</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 909;
                  ">
                      <a href="">Tab-Nabbing<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=nice-tabby-cat.php">Tabby
                                  Cat</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 908;
                  ">
                      <a href="">Unrestricted
                          File
                          Upload<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=upload-file.php">File
                                  Upload</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 907;
                  ">
                      <a href="">Denial
                          of
                          Service<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="?page=text-file-viewer.php">Text
                                  File
                                  Viewer</a>
                          </li>
                          <li>
                              <a href="?page=show-log.php">Show
                                  Web
                                  Log</a>
                          </li>
                          <li></li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 906;
                  ">
                      <a href="">JavaScript
                          Validation
                          Bypass<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=login.php">Login</a>
                          </li>
                          <li>
                              <a href="index.php?page=user-info.php">User
                                  Info
                                  (SQL)</a>
                          </li>
                          <li>
                              <a href="index.php?page=user-info-xpath.php">User
                                  Info
                                  (XPath)</a>
                          </li>
                          <li>
                              <a href="index.php?page=add-to-your-blog.php">Add
                                  to
                                  your
                                  blog</a>
                          </li>
                          <li>
                              <a href="index.php?page=html5-storage.php">HTML5
                                  Web
                                  Storage</a>
                          </li>
                          <li>
                              <a href="index.php?page=dns-lookup.php">DNS
                                  Lookup</a>
                          </li>
                          <li>
                              <a href="index.php?page=echo.php">Echo
                                  Message</a>
                          </li>
                          <li>
                              <a href="index.php?page=cors.php">Echo
                                  Message
                                  (CORS)</a>
                          </li>
                          <li>
                              <a href="index.php?page=content-security-policy.php">Echo
                                  Message
                                  (CSP)</a>
                          </li>
                          <li>
                              <a href="index.php?page=repeater.php">Repeater</a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="index.php?page=user-agent-impersonation.php">User-Agent
                          Impersonation</a>
                  </li>
                  <li style="
                      z-index: 905;
                  ">
                      <a href="">Data
                          Capture
                          Pages<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=capture-data.php">Data
                                  Capture</a>
                          </li>
                          <li>
                              <a href="index.php?page=captured-data.php">View
                                  Captured
                                  Data</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 904;
                  ">
                      <a href="">JSON
                          Web
                          Token
                          (JWT)<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=jwt.php">Current
                                  User
                                  Information</a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
          <li style="
              z-index: 903;
          ">
              <a href="" style="
                  padding-right: 23px;
              ">Labs<img src="../src/images/right.gif" class="rightarrowclass" style="
                      border: 0;
                  " /></a>
              <ul style="
                  display: none;
                  top: 0px;
                  box-shadow: rgb(
                          170,
                          170,
                          170
                      )
                      5px
                      5px
                      5px;
                  visibility: visible;
              ">
                  <li style="
                      z-index: 902;
                  ">
                      <a href="">How
                          the
                          Web
                          Works<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-1.php">Lab
                                  1
                                  -
                                  Sending
                                  HTTP
                                  Requests
                                  with
                                  Netcat</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-2.php">Lab
                                  2
                                  -
                                  Capturing
                                  HTTP
                                  Packets
                                  with
                                  Wireshark</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-3.php">Lab
                                  3
                                  -
                                  Intercepting
                                  HTTP
                                  Requests
                                  and
                                  Responses</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-4.php">Lab
                                  4
                                  -
                                  Using
                                  Burp-Suite
                                  Proxy
                                  History</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-5.php">Lab
                                  5
                                  -
                                  Bypassing
                                  Client-side
                                  Security</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 901;
                  ">
                      <a href="">SQL
                          Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-6.php">Lab
                                  6
                                  -
                                  Testing
                                  for
                                  SQL
                                  Errors</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-7.php">Lab
                                  7
                                  -
                                  Using
                                  SQLi
                                  to
                                  Bypass
                                  Authentication</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-8.php">Lab
                                  8
                                  -
                                  Extracting
                                  data</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-9.php">Lab
                                  9
                                  -
                                  Finding
                                  Number
                                  of
                                  Columns</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-10.php">Lab
                                  10
                                  -
                                  Pivoting
                                  with
                                  SQL
                                  injection</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-11.php">Lab
                                  11
                                  -
                                  SQLMap</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 900;
                  ">
                      <a href="">Command
                          Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-12.php">Lab
                                  12
                                  -
                                  Extracting
                                  User
                                  Accounts
                                  with
                                  Command
                                  Injection</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-13.php">Lab
                                  13
                                  -
                                  Testing
                                  for
                                  Reverse
                                  Connection</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-14.php">Lab
                                  14
                                  -
                                  Reverse
                                  Bash
                                  Shell
                                  with
                                  Command
                                  Injection</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-15.php">Lab
                                  15
                                  -
                                  Reverse
                                  Meterpreter
                                  Shell
                                  with
                                  Command
                                  Injection</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-16.php">Lab
                                  16
                                  -
                                  Web
                                  Shell
                                  with
                                  Command
                                  injection</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 899;
                  ">
                      <a href="">Lightweight
                          Directory
                          Access
                          Protocol
                          (LDAP)
                          Injection<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-17.php">Lab
                                  17
                                  -
                                  Extract
                                  User
                                  Accounts
                                  with
                                  LDAP
                                  Injection</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 898;
                  ">
                      <a href="">Insecure
                          Direct
                          Object
                          Referece
                          (IDOR)<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-18.php">Lab
                                  18
                                  -
                                  Edit
                                  Another
                                  User's
                                  Profile</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-19.php">Lab
                                  19
                                  -
                                  Extracting
                                  User
                                  Accounts
                                  with
                                  IDOR</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-20.php">Lab
                                  20
                                  -
                                  Extracting
                                  User
                                  Accounts
                                  with
                                  Local
                                  File
                                  Inclusion</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-21.php">Lab
                                  21
                                  -
                                  Web
                                  Shell
                                  with
                                  Local
                                  File
                                  Inclusion
                                  (LFI)</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-22.php">Lab
                                  22
                                  -
                                  Web
                                  Shell
                                  with
                                  Remote
                                  File
                                  Inclusion
                                  (RFI)</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 897;
                  ">
                      <a href="">Open
                          Redirect<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-23.php">Lab
                                  23
                                  -
                                  Open
                                  Redirects
                                  -
                                  Part
                                  1</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-24.php">Lab
                                  24
                                  -
                                  Open
                                  Redirects
                                  -
                                  Part
                                  2</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 896;
                  ">
                      <a href="">Cross-site
                          Scripting
                          (XSS)<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-25.php">Lab
                                  25
                                  -
                                  Creating
                                  a
                                  Cross-site
                                  Script
                                  Proof
                                  of
                                  Concept
                                  (PoC)</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-26.php">Lab
                                  26
                                  -
                                  Browser
                                  Exploitation
                                  Framework
                                  (BeEF)</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-27.php">Lab
                                  27
                                  -
                                  Bypassing
                                  Client-side
                                  Defenses</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-28.php">Lab
                                  28
                                  -
                                  Defending
                                  Against
                                  Cross-site
                                  Scripting</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 895;
                  ">
                      <a href="">Cross-site
                          Request
                          Forgery
                          (CSRF)<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-29.php">Lab
                                  29
                                  -
                                  Voting
                                  for
                                  NMap</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-30.php">Lab
                                  30
                                  -
                                  Adding
                                  a
                                  Blog</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 894;
                  ">
                      <a href="">HTML5
                          Web
                          Storage<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-31.php">Lab
                                  31
                                  -
                                  Capturing
                                  HTML
                                  5
                                  Web
                                  Storage</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 893;
                  ">
                      <a href="">Session
                          Management<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-32.php">Lab
                                  32
                                  -
                                  Capture
                                  Session
                                  with
                                  XSS</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-33.php">Lab
                                  33
                                  -
                                  Intercepting
                                  Session
                                  Token
                                  using
                                  Network
                                  Sniffer</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-34.php">Lab
                                  34
                                  -
                                  Exfiltrating
                                  Data
                                  with
                                  XSS</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-35.php">Lab
                                  35
                                  -
                                  Capture
                                  Session
                                  with
                                  XSS</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-36.php">Lab
                                  36
                                  -
                                  Using
                                  a
                                  captured
                                  session
                                  token</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 892;
                  ">
                      <a href="">Cookie
                          Management<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-37.php">Lab
                                  37
                                  -
                                  Show
                                  Hints</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-38.php">Lab
                                  38
                                  -
                                  Privilege
                                  Escalation</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 891;
                  ">
                      <a href="">Password
                          Management<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-39.php">Lab
                                  39
                                  -
                                  Password
                                  Cracking</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-40.php">Lab
                                  40
                                  -
                                  Intercepting
                                  Clear-Text
                                  Credentials</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-41.php">Lab
                                  41
                                  -
                                  Hydra</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 890;
                  ">
                      <a href="">Input
                          Validation<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-42.php">Lab
                                  42
                                  -
                                  Input
                                  Validation</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-43.php">Lab
                                  43
                                  -
                                  File
                                  Identification</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 889;
                  ">
                      <a href="">Error
                          Handling<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-44.php">Lab
                                  44
                                  -
                                  Grabbing
                                  Server
                                  Banners</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-45.php">Lab
                                  45
                                  -
                                  Creating
                                  Injection
                                  Files</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-46.php">Lab
                                  46
                                  -
                                  Scanning
                                  with
                                  Nikto</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-47.php">Lab
                                  47
                                  -
                                  Testing
                                  for
                                  Errors</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 888;
                  ">
                      <a href="">Logging<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-48.php">Lab
                                  48
                                  -
                                  Log
                                  Poisoning</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-49.php">Lab
                                  49
                                  -
                                  Log
                                  Disclosure</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 887;
                  ">
                      <a href="">Server
                          Configuration<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-50.php">Lab
                                  50
                                  -
                                  Testing
                                  HTTP
                                  Response
                                  Headers</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-51.php">Lab
                                  51
                                  -
                                  Scanning
                                  with
                                  Nikto</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-52.php">Lab
                                  52
                                  -
                                  Scanning
                                  with
                                  SSLScan</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 886;
                  ">
                      <a href="">Content
                          Security
                          Policy
                          (CSP)<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-53.php">Lab
                                  53
                                  -
                                  Testing
                                  HTTP
                                  Response
                                  Headers</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-54.php">Lab
                                  54
                                  -
                                  Scanning
                                  with
                                  SSLScan</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-55.php">Lab
                                  55
                                  -
                                  Testing
                                  Content
                                  Security
                                  Policy
                                  (CSP)</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 885;
                  ">
                      <a href="">JSON
                          Web
                          Token
                          (JWT)
                          Security<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-56.php">Lab
                                  56
                                  -
                                  Session
                                  Timeout</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-57.php">Lab
                                  57
                                  -
                                  Missing
                                  Signature
                                  Validation</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-58.php">Lab
                                  58
                                  -
                                  Cracking
                                  Signature
                                  Password</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-59.php">Lab
                                  59
                                  -
                                  SQL
                                  Injection
                                  via
                                  JWT</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 884;
                  ">
                      <a href="">Cross-origin
                          Resource
                          Sharing
                          (CORS)<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-60.php">Lab
                                  60
                                  -
                                  Access
                                  Control
                                  Allow
                                  Origin
                                  Header</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-61.php">Lab
                                  61
                                  -
                                  Pre-Flight
                                  Requests</a>
                          </li>
                      </ul>
                  </li>
                  <li style="
                      z-index: 883;
                  ">
                      <a href="">Software
                          Composition
                          Analysis
                          (SCA)<img src="../src/images/right.gif" class="rightarrowclass" style="
                              border: 0;
                          " /></a>
                      <ul style="
                          display: none;
                          top: 0px;
                          box-shadow: rgb(
                                  170,
                                  170,
                                  170
                              )
                              5px
                              5px
                              5px;
                          visibility: visible;
                      ">
                          <li>
                              <a href="index.php?page=labs/lab-62.php">Lab
                                  62
                                  -
                                  Retire.js</a>
                          </li>
                          <li>
                              <a href="index.php?page=labs/lab-63.php">Lab
                                  63
                                  -
                                  OWASP
                                  Depenency
                                  Check</a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
          <li style="
              z-index: 882;
          ">
              <a href="" style="
                  padding-right: 23px;
              ">Documentation<img src="../src/images/right.gif" class="rightarrowclass" style="
                      border: 0;
                  " /></a>
              <ul style="
                  display: none;
                  top: 0px;
                  box-shadow: rgb(
                          170,
                          170,
                          170
                      )
                      5px
                      5px
                      5px;
                  visibility: visible;
              ">
                  <li>
                      <a href="index.php?page=documentation/installation.php">Installation
                          Instructions
                          (Linux)</a>
                  </li>
                  <li>
                      <a href="documentation/mutillidae-installation-on-xampp-win7.pdf"
                          target="_blank">Installation
                          Instructions
                          (Windows)</a>
                  </li>
                  <li>
                      <a href="index.php?page=documentation/usage-instructions.php">Usage
                          Instructions</a>
                  </li>
                  <li>
                      <a href="index.php?page=documentation/vulnerabilities.php">Listing
                          of
                          Vulnerabilities</a>
                  </li>
                  <li>
                      <a href="index.php?page=credits.php">Credits</a>
                  </li>
                  <li>
                      <a href="https://www.sans.org/reading-room/whitepapers/application/introduction-owasp-mutillidae-ii-web-pen-test-training-environment-34380"
                          target="_blank">
                          Whitepaper:
                          Introduction
                          to
                          the
                          Mutillidae
                          Web
                          Pen
                          Test
                          Training
                          Environment
                      </a>
                  </li>
              </ul>
          </li>
          <li style="
              z-index: 881;
          ">
              <a href="" style="
                  padding-right: 23px;
              ">Resources<img src="../src/images/right.gif" class="rightarrowclass" style="
                      border: 0;
                  " /></a>
              <ul style="
                  display: none;
                  top: 0px;
                  box-shadow: rgb(
                          170,
                          170,
                          170
                      )
                      5px
                      5px
                      5px;
                  visibility: visible;
              ">
                  <li>
                      <a href="https://github.com/webpwnized/mutillidae" target="_blank">
                          Latest
                          Version
                          of
                          OWASP
                          Mutillidae
                          II
                      </a>
                  </li>
                  <li>
                      <a href="https://www.owasp.org/index.php/Top_Ten" target="_blank">
                          OWASP
                          Top
                          Ten
                      </a>
                  </li>
                  <li>
                      <a href="https://addons.mozilla.org/en-US/firefox/collections/jdruin/pro-web-developer-qa-pack/"
                          target="_blank">
                          Web
                          Penetration
                          Testing
                          Add-Ons
                      </a>
                  </li>
              </ul>
          </li>
      </ul>
  </div>
  <div>&nbsp;</div>
  <div>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="45R3YEXENU97S" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit"
              alt="Donate Today!" />
          <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
      Want to Help?
  </div>
  <div>&nbsp;</div>
  <div>
      <a href="http://www.youtube.com/user/webpwnized" target="_blank">
          <img alt="Webpwnized YouTube Channel" src="../src/images/youtube-play-icon-40-40.png" />
          <br />
          Video Tutorials
      </a>
  </div>
  <div>&nbsp;</div>
  <div>
      <a href="https://twitter.com/webpwnized" target="_blank">
          <img alt="Webpwnized Twitter Channel" src="../src/images/twitter-bird-48-48.png" />
          <br />
          Announcements
      </a>
  </div>
  <div>&nbsp;</div>
  <div>
      <a href="https://www.sans.org/reading-room/whitepapers/application/introduction-owasp-mutillidae-ii-web-pen-test-training-environment-34380"
          target="_blank"
          title="Whitepaper: Introduction to OWASP Mutillidae II Web Pen Test Training Environment">
          <img alt="Webpwnized Twitter Channel" src="../src/images/pdf-icon-48-48.png" align="middle" />
          <br />
          Getting Started
      </a>
  </div>
  <div>&nbsp;</div>
  `;
        
        var rutaAbsoluta = self.location.href;   
		var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
		var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
        
        rutaRelativa ==='index.html'? this.innerHTML = menuHome : this.innerHTML = menuOthers;
    }
    
}

window.customElements.define("menu-left", menuLeft)