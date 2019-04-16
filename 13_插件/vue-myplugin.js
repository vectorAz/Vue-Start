(function(w){
    const myplugin={}
    myplugin.install=function(value,options){
        Vue.logmethod=function(){
            console.log('method');
        }
        Vue.directive('my-directive',function(el,content){
            el.innerHTML='my-directive------'+content.value
        })
        Vue.prototype.$myplugin = function(){
            console.log('vm的myplugin');
            
        }
    }

    w.myplugin=myplugin
})(window)