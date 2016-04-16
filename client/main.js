if (Meteor.isClient) {

    Router.configure({
        layoutTemplate: 'layout',
    });

    var MonitorController = RouteController.extend({
        template: 'monitor'
    });

    var ContractController = RouteController.extend({
        template: 'contract'
    });

    var IndexController = RouteController.extend({
        template: 'index'
    });
    
    Router.map(function() {

        this.route('monitor', { 
            path: '/monitor', 
            controller: MonitorController 
        });

        this.route('contract', { 
            path: '/contract', 
            controller: ContractController 
        });

        this.route('index', {
            path: '/index',
            controller: IndexController
        });

    });

}
