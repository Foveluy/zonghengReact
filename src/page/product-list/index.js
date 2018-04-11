import React from 'react'
import { Drawer, List } from 'antd-mobile'
import { ProductCard } from './product-card'
import './index.css'

const fake = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => {
        return {
            select: false,
            content: 'foo'
        }
    })
}

export default class ProductList extends React.Component {
    state = {
        docked: false,
        list: fake()
    }
    onDock = d => {
        this.setState({
            [d]: !this.state[d]
        })
    }

    handleClick = i => {
        this.setState({
            list: this.state.list.map((item, index) => {
                if (index === i) {
                    return { ...item, select: true }
                }
                return { ...item, select: false }
            })
        })
    }

    render() {
        const sidebar = (
            <List>
                {this.state.list.map((i, index) => {
                    return (
                        <List.Item onClick={() => this.handleClick(index)} key={index}>
                            <div
                                className={i.select ? 'list-item' : ''}
                                style={{ color: i.select ? '#ff9c6e' : 'black' }}
                            >
                                c{index}
                            </div>
                        </List.Item>
                    )
                })}
            </List>
        )

        return (
            <div style={{ height: '100%' }}>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight }}
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center' }}
                    sidebarStyle={{ border: '1px solid #ddd' }}
                    sidebar={sidebar}
                    docked={true}
                    transitions={false}
                >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((d, index) => {
                        return <ProductCard key={index} />
                    })}
                </Drawer>
            </div>
        )
    }
}
