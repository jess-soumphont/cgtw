Router.configure({
  layoutTemplate: 'ApplicationLayout'

});
//menus
Router.route('/', function () {
  this.render('menu');
});
Router.route('/menu2', {
    template: 'menu2'
});
Router.route('/menu3', {
    template: 'menu3'
});
Router.route('/menu4', {
    template: 'menu4'
});
Router.route('/bottomNav', {
    template: 'bottomNav'
});

//weapon templates

//menu1
Router.route('/tridentMissile', {
    template: 'tridentMissile'
});
Router.route('/f22Raptor', {
    template: 'f22Raptor'
});
Router.route('/hellfireMissile', {
    template: 'hellfireMissile'
});
Router.route('/x95Assault', {
    template: 'x95Assault'
});
Router.route('/landmine', {
    template: 'landmine'
});
Router.route('/abrahams', {
    template: 'abrahams'
});

//menu2
Router.route('/f35', {
    template: 'f35'
});
Router.route('/apache', {
    template: 'apache'
});
Router.route('/blu', {
    template: 'blu'
});
Router.route('/aa12', {
    template: 'aa12'
});
Router.route('/bgm', {
    template: 'bgm'
});
Router.route('/howitzer', {
    template: 'howitzer'
});

//menu3
Router.route('/airbus', {
    template: 'airbus'
});
Router.route('/reaper', {
    template: 'reaper'
});
Router.route('/uzi', {
    template: 'uzi'
});
Router.route('/killWeapon', {
    template: 'killWeapon'
});
Router.route('/ballistic', {
    template: 'ballistic'
});
Router.route('/cbu', {
    template: 'cbu'
});


//menu4
Router.route('/f15', {
    template: 'f15'
});
Router.route('/fgm', {
    template: 'fgm'
});
Router.route('/dsr', {
    template: 'dsr'
});
Router.route('/paveway', {
    template: 'paveway'
});
Router.route('/mk48', {
    template: 'mk48'
});
Router.route('/activeDenial', {
    template: 'activeDenial'
});