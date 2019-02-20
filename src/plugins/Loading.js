import ComLoading from '../components/Loading/Loading.vue'

const loading = (Vue, option) => {

    const Loading = Vue.extend(ComLoading)

    const $vm = new Loading({
        el: document.createElement('div')
    })

    document.body.appendChild($vm.$el);

    Vue.prototype.$Loading = {
        show: $vm.show,
        hide: $vm.hide
    }
}


export default loading
