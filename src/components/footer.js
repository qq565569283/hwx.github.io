import React from 'react'

class Footer extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <section className="col-md-12 card-wrapper">
                <div className="footer">简历模板由 黄伟雄 设计开发，最后更新于<span className="date">2022-02-08</span></div>
            </section>
        )
    }
}
export default Footer
