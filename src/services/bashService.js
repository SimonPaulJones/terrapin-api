module.exports = {
    executeCommand: (command) => {
        const { exec } = require('child_process');
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(`Error: ${stderr}`);
                } else {
                    resolve(stdout.trim());
                }
            });
        });
    },

    handleSetAction: async (message) => {
        const responses = {};
        if (message.lights !== undefined) {
            responses.lights = await this.executeCommand(message.lights ? 'turn_on_lights_command' : 'turn_off_lights_command');
        }
        if (message.filter !== undefined) {
            responses.filter = await this.executeCommand(message.filter ? 'turn_on_filter_command' : 'turn_off_filter_command');
        }
        return { response: responses };
    },

    handleQueryAction: async () => {
        const lightsStatus = await this.executeCommand('query_lights_status_command');
        const filterStatus = await this.executeCommand('query_filter_status_command');
        return {
            response: {
                lights: lightsStatus === 'on',
                filter: filterStatus === 'on'
            }
        };
    }
};