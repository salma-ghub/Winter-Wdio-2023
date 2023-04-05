Parallel Testing:
    Multiple testcases getting executed at the same time.

Cross Browser Testing:
    a testcase/scenario getting executed on different browsers.

    In local: using selenium-standalone service
        add selenium-standalone as dependency
        change services to selenium-standalone
        add capabilities for different browsers
    In cloud: using BrowserStack, SauceLabs, LambdaTest etc
        add browserstack as dependency
        change services to browserstack
        add user, key
        add capabilities for different browsers in different operating-systems
