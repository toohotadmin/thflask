var limit=40

$.ajaxSetup({
    headers: {
        'Accept': 'application/json',
    },
    contentType: "application/json; charset=utf-8",
    dataType:    "json"
});

const qs = new URLSearchParams(window.location.search)
var vstatus = qs.get('status')
var sstring = qs.get('q')
window.onscroll = function(ev) {
    //console.log("inner height: "+(window.innerHeight + window.pageYOffset) + " offset height: "+document.body.offsetHeight) 
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        komodel.addVideos()
    }
};
$(function () {
    const TitleModal = document.getElementById("titleDetails")
    TitleModal.addEventListener('hidden.bs.modal', event => {
        komodel.closeModalTitle()
    })
    const staticModal = document.getElementById("staticBackdrop")
    staticModal.addEventListener('hidden.bs.modal', event => {
        Cookies.set('eucookie','stupideulaw',{ expires: 14 })
    })

    var alert=function(atype,amsg,atimeout){
        var self=this;
        self.atype=ko.observable(atype);
        if(atype=='loading'){
            atype='info';
            glyphicon='bi-plus';
        }else{
            glyphicon='bi-exclamation';
        }
        self.aclass=ko.observable('alert alert-'+atype+' alert-dismissible');
        self.icon=ko.observable(glyphicon);
        self.amsg=ko.observable(amsg);
        self.isVisible=ko.observable(true);
        self.close=function(){
            self.isVisible(false);
        }
        if(atimeout>0){
            setTimeout(function(){self.isVisible(false)},atimeout);
        }
        return self;
    }
    var vItem=function(data){
        var self=this
        if(data.modDetail){
            self.modDetail=data.modDetail
        }else{
            self.modDetail=('videoDetail')
        }
        self.videoid = data.id
        self.embed=data.embed
        self.url=data.url
        self.actor=data.actor
        self.description=data.description
        self.size=data.size
        if(data.urltext){
            self.urltext = data.urltext
        }else{
            self.urltext = data.url
        }
        self.site=data.site
        self.rank=data.rank
        self.title=data.title
        self.alt=data.alt
	self.s=data.status
        self.tags=data.tags
        self.thumbnail=data.thumbnail
        if (data.thumbnail.startsWith('http://')){
            self.thumbnail="/pi?url="+data.thumbnail
        }else{
            self.thumbnail=data.thumbnail
        }
        if(!data.title || data.title == ""){
            self.title=data.alt
        }
        return self
    }

    var Controller = function () { //line 875
        var self = this;
        //start alert functions
        self.alerts=ko.observableArray([]);
        self.parseAlerts=function(ctype){
            ko.utils.arrayForEach(self.alerts(), function(alert) {
                if(ctype=='showalert'){
                    alert.isVisible(true)
                }else if(ctype=='hidealert'){
                    alert.isVisible(false);
                }else{
                    if(alert.atype()==ctype){
                        alert.isVisible(false);
                    }
                }
            });
        }
        self.alertsToShow=ko.computed(function(){
        //return self.alerts();
            if(self.alerts().length>0){
                return ko.utils.arrayFilter(self.alerts(),function(alert){
                if(alert.isVisible()) return true;
                });
            }
        },self);

        this.showAlerts = function(elem) {
            //console.log('show fired');
            if (elem.nodeType === 1) $(elem).hide().fadeIn()
        }
        this.hideAlerts = function(elem) { if (elem.nodeType === 1) $(elem).fadeOut(function() { $(elem).remove(); }) }
        self.atbname=ko.observable('Hide All Alerts');
        self.toggleAlerts=function(){
            self.atbname('Hide All Alerts');
            self.parseAlerts('hidealert')
        }
        

        self.addAlert=function(type,message,timeout){
            self.alerts.unshift(new alert(type,message,timeout));
        }
        //end alert functions
        self.isloading=ko.observable(true)
        self.modalTemplate=ko.observable('loadingTemplate')
        self.edit=ko.observable(false)
        self.searchtext=ko.observable()
        self.sitesearchtext=ko.observable()
        self.sitesearch=ko.observable(false)
        self.sitetext=ko.observable()
        // start title specific variables
        self.modDetail=ko.observable('videoDetail')
        self.currentIndex=ko.observable()
        self.videoid=ko.observable('')
        self.embed=ko.observable()
        self.size=ko.observable()
        self.url=ko.observable()
        self.urltext=ko.observable()
        self.title=ko.observable()
        self.thumbnail=ko.observable()
        self.videofile=ko.observable()
        self.site=ko.observable()
        self.description=ko.observable()
        self.actor=ko.observable()
        self.tags=ko.observable()
        self.rank=ko.observable(0)
        self.alt=ko.observable()
        // end title specific variables
        // start nord
        self.nipaddr=ko.observable()
        self.ncountry=ko.observable()
        self.nregion=ko.observable()
        self.ncity=ko.observable()
        self.nisp=ko.observable()
        // end nord
        self.hidevideo=ko.observable()
        self.qcount=ko.observable(0)
        self.total=ko.observable(0)
        self.vitems=ko.observableArray()
        self.thumbitems=ko.observableArray()
        self.offset=ko.computed(function(){
            return (limit*self.qcount())
        })

        self.ad_data={
        "thumbnail":"/static/nordvpnhead.webp",
            "site":"nordvpn.com",
            "modDetail":"nordDetail",
            "url":"https://go.nordvpn.net/aff_c?offer_id=15&aff_id=1322&aff_sub=toohot",
            "urltext":"Protect Yourself with a VPN",
            "embed":"/video?url=https://toohot.info/media/nordvpn5.mp4",
            "title":"Your Private information may be exposed!<br>Click the video to find out how to protect yourself!",
            "actor":"toohot.info"
        }
        self.toggleSearch=function(){
            if(self.sitesearch()){
                self.sitesearch(false)
            }else{
                self.sitesearch(true)
            }
        }
        self.searchVideos=function(){
            //self.vitems.removeAll();
            self.qcount(0)
            self.loadVideos()
        }
        self.searchSites=function(){
            self.loadSiteSearch()
        }
        self.query=ko.computed(function(){
            if(vstatus){
                status=vstatus
            }else{
                status ="2"
            }
            
            var q='limit='+limit+'&offset='+self.offset()+'&status='+status
            if(self.searchtext()){
                return q+'&q='+self.searchtext()
            }else if(sstring){
                return q+'&q='+sstring
            }else{
                return q
            }
        })
        self.ssquery=ko.computed(function(){
            var q=self.sitesearchtext()
            if(self.sitetext() && self.sitetext()!=''){
                return q+'&sites='+self.sitetext()+'&limit=30'
            }else{
                return q+'&limit=10'
            }
        })
        self.getIPDetails=function(){
            $.get('/api/nord',function(data){
                self.nipaddr(data.ip)
                self.ncountry(data.country)
                self.nregion(data.region)
                self.ncity(data.city)
                self.nisp(data.isp)
            })
        }
        self.loadSiteSearch=function(){
            self.vitems.removeAll()
            self.addAlert('loading','Loading Site Search...')
            self.isloading(true)
            $.get('/api/v2/search?q='+self.ssquery(),function(data){
                self.parseAlerts('loading')
                self.isloading(false)
                for(i in data){
                    self.vitems.push(new vItem(data[i]))
                }
            })
        }
        self.loadVideos=function(){
            self.addAlert('loading','Loading Titles...')
            if(self.offset()<1){
                console.log('resetting vid array')
                self.vitems.removeAll()
            }
            self.isloading(true)
            $.get('/api/video?'+self.query(),function(data){
                self.parseAlerts('loading')
                self.isloading(false)
                if(data.total){
                    self.total(data.total)
                    self.addAlert('info','Found '+ data.total + ' videos!',3000)
                }else{
                    self.addAlert('warning','Nothing Found for this query',5000)
                }
                for(i in data.list){
                    if(i == 5 || i == 20){ self.vitems.push(new vItem(self.ad_data)) }
                    console.log('pushing video into list...')
                    self.vitems.push(new vItem(data.list[i]))
                }
                self.qcount(self.qcount()+1)
                console.log(self.vitems().length)
            })
        }
        self.addVideos=function(){
            if(!self.isloading() && self.offset()<self.total()){
                console.log('loading videos...')
                self.loadVideos()
            }
        }
        self.updateVideo=function(){
            self.addAlert('loading','Attempting to save Video Details')
            data = {
                "thumbnail":self.thumbnail(),
                "title":self.title(),
                "site":self.site(),
                "url":self.url(),
                "size":self.size(),
                "embed":self.embed(),
                "actor":self.actor(),
                "tags":self.tags(),
                "alt": self.alt(),
                "description":self.description(),
                "rank":self.rank(),
                "status":'2'
            }
            if(self.videoid() && self.videoid() != ''){
                vid = '/'+self.videoid()
                method='PATCH'
            } else {
                vid = ''
                method='POST'
                data['embed'] = self.embed()
            }   
            
            $.ajax({url: '/api/video'+vid, type: method, data:JSON.stringify(data),
                success:     function(retval){
                    console.log("vid updated:" + retval)
                    self.parseAlerts('loading')
                    self.addAlert('info','Video Saved',5000)
                },
                error: function (request, status, error) {
                    self.parseAlerts('loading')
                    self.addAlert('danger',request.responseText,3000);
                }
            })
        }
        self.removeVideo=function(that){
            $.ajax({url: '/api/video/'+that.videoid, type: "PATCH", data:JSON.stringify({"status":1}),
                success:     function(retval){
                    self.vitems.remove(that)
                }
            })
        }
        self.embedDetails=function(that){
            self.modalTemplate('loadingTemplate')
            self.addAlert('loading','Attempting to update Video Details')
            data={"url": self.url()}
            console.log(JSON.stringify(data))
            self.thumbitems([])
            $.ajax({url: '/api/v2/embed', type: "POST", data:JSON.stringify(data),
                success:     function(retval){
                    console.log(JSON.stringify(retval))
                    self.parseAlerts('loading')
                    self.addAlert('info','video details updated',3000)
                    if (retval.title) { self.title(retval.title) }
                    if (retval.site) { self.site(retval.site) }
                    if (retval.tags) { self.tags(retval.tags.join()) }
                    if (retval.url) { self.url(retval.url) }
                    if (retval.embed) { self.embed(retval.embed) }
                    if (retval.actors && retval.actors.length>0) { self.actor(retval.actors.join()) }
                    self.extractDetails(retval)
                    //need to add check if image already exists before pushing
                    retval.images.forEach((image) => {
                        self.thumbitems.push({'image':image});
                    })
                },
                error: function (request, status, error) {
                    self.parseAlerts('loading')
                    self.addAlert('danger',request.responseText,3000);
                }
            })
        }
        self.newModalTitle=function(){
            $('#titleDetails').modal('show')
        }
        self.selectThumbnails=function(){
            self.modalTemplate('imageListTemplate')
        }
        self.selectThumbnail=function(){
            self.thumbnail(this.image)
        }
        self.extractDetails=function(that){
            $.ajax({url: '/api/v2/extract', type: "POST", data:JSON.stringify({embed_url:that.embed}),
                success:     function(retval){
                    self.modalTemplate(retval.embedtype+'Template')
                    if (retval.urls.length>0) {
                        console.log("adding videofile:"+retval.urls[retval.urls.length-1])
                        self.videofile(retval.urls[retval.urls.length-1])
                    } else {
                        console.log(retval)
                        self.videofile(that.embed)
                    }
                },
                error: function (request, status, error) {
                    self.addAlert('danger',request.responseText,3000);
                }
            })
        }
        self.staticModal=function(){
            if(!Cookies.get('eucookie')){
                $('#staticBackdrop').modal('show')
            }
        }
        self.openModalTitle=function(that){
            if(!self.nipaddr()){
                self.getIPDetails()
            }
            self.videoid(that.videoid)
            self.modDetail(that.modDetail)
            self.currentIndex(self.vitems().indexOf(that))
            self.embed(that.embed)
            self.url(that.url)
            self.urltext(that.urltext)
            self.rank(that.rank)
            self.description(that.description)
            self.actor(that.actor)
            self.site(that.site)
            self.size(that.size)
            self.tags(that.tags)
            self.title(that.title)
            self.alt(that.alt)
            self.thumbnail(that.thumbnail)
            self.thumbitems.push({'image':that.thumbnail})
            console.log('ci: '+self.currentIndex())
            $('#titleDetails').modal('show')
            if(!that.embed || that.embed == ""){
                self.embedDetails()
            }else{
                self.extractDetails(that)
            }
            //self.iframe("this is only a test:" + that.embed)
        }
        self.closeModalTitle=function(that){
            console.log('defaulting global video variables')
            self.modalTemplate("loadingTemplate")
            self.thumbitems([])
            self.modDetail('videoDetail')
            self.videoid('')
            self.embed('')
            self.url('')
            self.urltext('')
            self.thumbnail('')
            self.videofile('')
            self.site('')
            self.size('')
            self.description('')
            self.actor('')
            self.tags('')
            self.rank(0)
            self.title('')
            self.alt('')
        }
        self.loadVideos()
        self.staticModal()
        return self
    };
    komodel = new Controller();
    ko.applyBindings(komodel);
    $(document).on( 'scroll', function(){
          if ($(window).scrollTop() > 100) {
              $('.scroll-top-wrapper').addClass('show');
          } else {
              $('.scroll-top-wrapper').removeClass('show');
          }
      });
    $('.scroll-top-wrapper').on('click', scrollToTop);
    function scrollToTop() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
});
