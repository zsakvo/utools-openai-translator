import { Routes, Route, HashRouter } from 'react-router-dom'
import Config from '@/pages/config'
import Home, { IPopupCardProps } from '@/pages/home'
import { useEffect, useState } from 'react'
import { TranslateMode } from './common/utils'
export default function () {
    const [props, setProps] = useState<IPopupCardProps>({})
    useEffect(() => {
        utools.onPluginEnter(({ code, type, payload }) => {
            console.log('用户进入插件应用', code, type, payload)
            setProps({
                text: payload,
                mode: code as TranslateMode,
            })
        })
    }, [])
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home {...props} />} />
                <Route path='/config' element={<Config />} />
            </Routes>
        </HashRouter>
    )
}
