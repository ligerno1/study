import { ref } from 'vue'
// 引入axios
import axios from 'axios'

// 发送ajax请求
export default function<T>(url: string) {
    // 加载的状态
    const loading = ref(true)
    // 请求成功的数据
    const data = ref<T | null>(null)
    // 请求失败的错误信息
    const errorMsg = ref('')
    // 发送请求
    axios.get(url).then((response:any) => {
        // 改变加载状态
        loading.value = false
        data.value = response.data
    }).catch((error:any) => {
        // 改变加载状态
        loading.value = false
        errorMsg.value = error.message || '未知错误'
    })
    return {
        loading,
        data,
        errorMsg
    }
}