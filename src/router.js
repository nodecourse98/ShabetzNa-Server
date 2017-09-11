userRouter = require('./routes/user.router');
missionTypeRouter = require('./routes/missiontype.router');
missionRouter = require('./routes/mission.router');
constraintRouter = require('./routes/constraint.router');

module.exports = (server) => {
    server.use('/api/user', userRouter);
    server.use('/api/missiontype', missionTypeRouter);
    server.use('/api/mission', missionRouter);
    server.use('/api/constraint', constraintRouter);    
}