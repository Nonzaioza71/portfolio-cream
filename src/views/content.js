import React, { Component, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import rout from '../router'

export default class Content extends Component {
    render() {
        return (
            <div>
                <Suspense>
                    <Routes>
                        {
                            rout.map((page, idx)=>(
                                <Route key={page.key} path={page.path} element={<page.element />} />
                            ))
                        }
                    </Routes>
                </Suspense>
                {/* <h1>Content</h1>
                <div>
                    <p>แนะนำตัวเอง</p>
                    <p>แรงบันดาลใจ</p>
                    <p>สิ่งที่คาดหวัง</p>
                    <p>ภาษาโปรแกรมที่ใช้ได้มีอะไรบ้าง</p>
                </div> */}
            </div>
        )
    }
}
