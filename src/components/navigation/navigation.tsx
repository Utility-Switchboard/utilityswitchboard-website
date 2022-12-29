import React, { useEffect, useState } from "react";

// CSS
import "./navigation-styles.scss";
import extended_navigation_lists from "./resources/extended-navigation-lists";

const Navigation = ({ transparent }: { transparent?: boolean }) => {
    const [showExtendedNavigaton, setShowExtendedNavigation] = useState<boolean>(false)

    // Navigation states
    const [navigationStage, setNavigationStage] = useState<number>(1)
    
    const [stageIndexes, setStageIndexes] = useState<{ category: number, sub_category: number, link: number}>({
        category: 0,
        sub_category: 0,
        link: 0
    })

    useEffect(() => {
        setNavigationStage(1)
        setStageIndexes({
            category: 0,
            sub_category: 0,
            link: 0
        })
    }, [showExtendedNavigaton])

    const handleCloseNavigationViaBackdrop = (event: React.MouseEvent): void => {
        event.stopPropagation();

        if(event.target === event.currentTarget) {
            setShowExtendedNavigation(false)
        }
    }

    const generateNavigationOptions: React.FC = () => {
        switch (navigationStage) {
            default:
                return (
                    <React.Fragment>
                        {
                            extended_navigation_lists.map(((category, i) => (
                                <React.Fragment>
                                    {category.url !== undefined ? (
                                        <a href={category.url}>
                                            <span className="link-text-wrapper">
                                                <i className={category.icon}/> <span>{category.category}</span>
                                            </span>
                                        </a>
                                    ) : (
                                        <li className="next-step" onClick={() => {
                                            setNavigationStage(2);
                                            setStageIndexes({
                                                ...stageIndexes,
                                                category: i
                                            })
                                        }}>
                                            <span className="link-text-wrapper">
                                                <i className={category.icon}/> <span>{category.category}</span>
                                            </span>
                                        </li>
                                    )}
                                </React.Fragment>
                            )))
                        }
                    </React.Fragment>
                )
            
            case 2:
                return (
                    <React.Fragment>
                        {
                            extended_navigation_lists[stageIndexes.category].sub_categories?.map((category, i) => (
                                <li className="next-step" onClick={() => {
                                    setNavigationStage(3)
                                    setStageIndexes({
                                        ...stageIndexes,
                                        sub_category: i
                                    })
                                }}>
                                    <span className="link-text-wrapper">
                                        <i className={category.icon}/> <span>{category.title}</span>
                                    </span>
                                </li>
                            ))
                        }
                    </React.Fragment>
                )

            case 3:
                return (
                    <React.Fragment>
                        {
                            extended_navigation_lists[stageIndexes.category].sub_categories[stageIndexes.sub_category].links?.map((link, i) => (
                                <a href={link.url}>{link.text}</a>
                            ))
                        }

                        <a className="all-category-link" href={extended_navigation_lists[stageIndexes.category].sub_categories[stageIndexes.sub_category].all_url}>{extended_navigation_lists[stageIndexes.category].sub_categories[stageIndexes.sub_category].all_text}</a>
                    </React.Fragment>
                )
        }
    }

    return (
        <React.Fragment>
            {/* Upper navigation section */}
            <div className={`navigation-upper-outer-container ${transparent === true ? 'white-version' : ''}`}>
                <div className="navigation-upper-inner-container container-width">
                    <span>Call customer service on <br className="customer-service-break"/><a className="telephone-link black" href="tel:+442039927717">020&nbsp;3992&nbsp;7717</a></span>
                </div>
            </div>

            {/* Lower navigation section */}
            <div className={`navigation-lower-outer-container ${transparent === true ? 'white-version' : ''}`}>
                <div className="navigation-lower-inner-container container-width">
                    {/* Navigation options */}
                    <ul className="navigation-menu-options">
                        <li>
                            <button 
                                className="navigation-button"
                                onClick={() => setShowExtendedNavigation(true)}
                            />
                        </li>
                        <a href="/gas-electricity" className="extended-navigation-option">Gas & electricity</a>
                        <a href="/tv-broadband" className="extended-navigation-option">TV & broadband</a>
                    </ul>

                    {/* Navigation logo */}
                    <a href="/" className="navigation-logo">
                        <img
                            src={`/images/usb-logo-${transparent === true ? 'colour' : 'white'}.png`}
                        />
                    </a>

                    {/* Navigation search bar */}
                    <div className="navigation-search-bar-container">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>

            {/* Navigation extended menu */}
            <div className={`navigation-backdrop ${showExtendedNavigaton ? 'show' : 'hide'}`} onClick={handleCloseNavigationViaBackdrop}>
                <div className={`extended-navigation ${showExtendedNavigaton ? 'show' : 'hide'}`}>
                    <div className="navigation-close-container" onClick={() => setShowExtendedNavigation(false)}>
                        <div className="navigation-close-inner-circle">
                            <button 
                                className="navigation-close-button"
                            />
                        </div>
                    </div>
                    <span>
                        <h2>Menu</h2>
                        
                        {
                            navigationStage > 1 ? (
                                <button
                                    className="go-back-button black"
                                    onClick={() => setNavigationStage(navigationStage - 1)}
                                >Go back</button>
                            ) : null
                        }
                        
                        <ul className="extended-navigation-ul">
                            {generateNavigationOptions({ props: null })}
                        </ul>
                    </span>

                    <span>
                        <p>Contact our customer support team:</p>
                        <a style={{fontSize: 24}} className="telephone-link black" href="tel:+442039927717">020&nbsp;3992&nbsp;7717</a>
                    </span>
                </div>
            </div>
            
        </React.Fragment>
        
    )
}

export default Navigation