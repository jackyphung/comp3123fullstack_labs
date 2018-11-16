const os = require('os');

function getSysteminfo() {  
    let cpu_arch = os.arch();
    let host_name = os.hostname();
    let os_name = os.type();
    //return { "CPU Architecture": os.arch(), "Host name": os.hostname(), "OS name": os.EOL()};
    return { Architecture: "os.arch()", Hostname: "os.hostname()", OSname: "os.EOL()"};
    return 'Operating System Info:' + cpu_arch + '-' + host_name + '-' + os_name;
}

function getUserInfo() {
    let user_info = os.userInfo();
    let username = os.userInfo().username;
    let home_dir = os.userInfo().homedir;
    //return { "User name": os.userInfo(username), "Home dir": os.userInfo(homedir)};
    return { Username : os.userInfo(username), Homedir : os.userInfo(homedir)};
    return 'User Info: ' +username+ '-' + home_dir;
}

module.exports = {
    getSysteminfo: getSysteminfo,  
    getUserInfo: getUserInfo,
}