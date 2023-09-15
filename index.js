(async function() {

    const Simctl = require('ios-sim-portable/lib/simctl').Simctl;
    const path = require("path");
    const shelljs = require("shelljs");
    let simCtl = new Simctl();

    const projectFilesPath = "<PROJECT-PATH>/platforms/ios/<APPNAME>/app";
    const appId = '<APP-BUNDLE-ID>';
    
    async function getAppPath(device) {
        let appPath = await simCtl.getAppContainer(device.id, appId);
        return appPath;
    }

    async function getRunningDevices() {
        const devices = await simCtl.getDevices();
        const running = devices.filter(d => d.state == "Booted");
        return running;
    }

    async function syncSimulatorsContent() {
        const devices = await getRunningDevices();
        if (devices.length == 0) {
            console.log("No devices found");
        }
        for (let i = 0; i < devices.length; i++) {
            const device = devices[i];
            const appPath = await getAppPath(device);
            const destinationPath = path.join(appPath, "app");
            const sourcePath = path.join(projectFilesPath, "*");
            console.log(`Updating device ${device.id}`);
            shelljs.cp("-Rf", sourcePath, destinationPath);
        }    
    }

    try {
        await syncSimulatorsContent();

    } catch (error) {
        console.log(error);
    }
    

})();
    
    
    
    
    
    