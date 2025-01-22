const bashService = require('../services/bashService');

exports.handleRequest = async (req, res) => {
    const { action, message } = req.body;

    if (action === 'set' && message) {
        const lightsOutput = message.lights ? await bashService.runCommand('command_to_set_lights') : await bashService.runCommand('command_to_turn_off_lights');
        const filterOutput = message.filter ? await bashService.runCommand('command_to_set_filter') : await bashService.runCommand('command_to_turn_off_filter');

        return res.json({
            response: {
                lights: lightsOutput,
                filter: filterOutput
            }
        });
    } else if (action === 'query') {
        const lightsStatus = await bashService.runCommand('command_to_query_lights');
        const filterStatus = await bashService.runCommand('command_to_query_filter');

        return res.json({
            response: {
                lights: lightsStatus === 'on',
                filter: filterStatus === 'on'
            }
        });
    } else {
        return res.status(400).json({ error: 'Invalid action' });
    }
};