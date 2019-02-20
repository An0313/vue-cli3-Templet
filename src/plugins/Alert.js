import ComAlert from '../components/Alert/Alert.vue'

const alert = {
    install(Vue) {
        const Alert = Vue.extend(ComAlert)
        let $vm = new Alert({
            el: document.createElement('div')
        });
        document.body.appendChild($vm.$el);

        Vue.prototype.$alert = (alertText = '', type = 'err') => {
            return $vm.push(alertText, type)
        }
    }
}

export default alert
