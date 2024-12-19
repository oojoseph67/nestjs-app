'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-masterclass documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-336d8d658e5297dccd042a9c8c717e7c6ed2499c0dc84284c90d9d882ee1e4153ee10c0b2315ceab5e9bc7ac689673d6db79f00d117abe1d163755381b718953"' : 'data-bs-target="#xs-controllers-links-module-AppModule-336d8d658e5297dccd042a9c8c717e7c6ed2499c0dc84284c90d9d882ee1e4153ee10c0b2315ceab5e9bc7ac689673d6db79f00d117abe1d163755381b718953"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-336d8d658e5297dccd042a9c8c717e7c6ed2499c0dc84284c90d9d882ee1e4153ee10c0b2315ceab5e9bc7ac689673d6db79f00d117abe1d163755381b718953"' :
                                            'id="xs-controllers-links-module-AppModule-336d8d658e5297dccd042a9c8c717e7c6ed2499c0dc84284c90d9d882ee1e4153ee10c0b2315ceab5e9bc7ac689673d6db79f00d117abe1d163755381b718953"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-336d8d658e5297dccd042a9c8c717e7c6ed2499c0dc84284c90d9d882ee1e4153ee10c0b2315ceab5e9bc7ac689673d6db79f00d117abe1d163755381b718953"' : 'data-bs-target="#xs-injectables-links-module-AppModule-336d8d658e5297dccd042a9c8c717e7c6ed2499c0dc84284c90d9d882ee1e4153ee10c0b2315ceab5e9bc7ac689673d6db79f00d117abe1d163755381b718953"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-336d8d658e5297dccd042a9c8c717e7c6ed2499c0dc84284c90d9d882ee1e4153ee10c0b2315ceab5e9bc7ac689673d6db79f00d117abe1d163755381b718953"' :
                                        'id="xs-injectables-links-module-AppModule-336d8d658e5297dccd042a9c8c717e7c6ed2499c0dc84284c90d9d882ee1e4153ee10c0b2315ceab5e9bc7ac689673d6db79f00d117abe1d163755381b718953"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-a4f9dc1a7ff84bc91e7c138a6a2ffe027f522c025775a0193d970d7dfb264e6ff69a1ecba480fc54f3a2c9261960ccc2ca9274fc5084e9d010ed713693ead579"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-a4f9dc1a7ff84bc91e7c138a6a2ffe027f522c025775a0193d970d7dfb264e6ff69a1ecba480fc54f3a2c9261960ccc2ca9274fc5084e9d010ed713693ead579"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-a4f9dc1a7ff84bc91e7c138a6a2ffe027f522c025775a0193d970d7dfb264e6ff69a1ecba480fc54f3a2c9261960ccc2ca9274fc5084e9d010ed713693ead579"' :
                                            'id="xs-controllers-links-module-AuthModule-a4f9dc1a7ff84bc91e7c138a6a2ffe027f522c025775a0193d970d7dfb264e6ff69a1ecba480fc54f3a2c9261960ccc2ca9274fc5084e9d010ed713693ead579"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-a4f9dc1a7ff84bc91e7c138a6a2ffe027f522c025775a0193d970d7dfb264e6ff69a1ecba480fc54f3a2c9261960ccc2ca9274fc5084e9d010ed713693ead579"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-a4f9dc1a7ff84bc91e7c138a6a2ffe027f522c025775a0193d970d7dfb264e6ff69a1ecba480fc54f3a2c9261960ccc2ca9274fc5084e9d010ed713693ead579"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-a4f9dc1a7ff84bc91e7c138a6a2ffe027f522c025775a0193d970d7dfb264e6ff69a1ecba480fc54f3a2c9261960ccc2ca9274fc5084e9d010ed713693ead579"' :
                                        'id="xs-injectables-links-module-AuthModule-a4f9dc1a7ff84bc91e7c138a6a2ffe027f522c025775a0193d970d7dfb264e6ff69a1ecba480fc54f3a2c9261960ccc2ca9274fc5084e9d010ed713693ead579"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-082764296e55a7ff489f5a7321cd4da61d26758ade62ab7f9755a7d8ebab903fe54dfb7b64b3fae2253f698be0ab55cf92c5cadda1098b15a7174b1d628c6c47"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-082764296e55a7ff489f5a7321cd4da61d26758ade62ab7f9755a7d8ebab903fe54dfb7b64b3fae2253f698be0ab55cf92c5cadda1098b15a7174b1d628c6c47"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-082764296e55a7ff489f5a7321cd4da61d26758ade62ab7f9755a7d8ebab903fe54dfb7b64b3fae2253f698be0ab55cf92c5cadda1098b15a7174b1d628c6c47"' :
                                            'id="xs-controllers-links-module-PostsModule-082764296e55a7ff489f5a7321cd4da61d26758ade62ab7f9755a7d8ebab903fe54dfb7b64b3fae2253f698be0ab55cf92c5cadda1098b15a7174b1d628c6c47"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-082764296e55a7ff489f5a7321cd4da61d26758ade62ab7f9755a7d8ebab903fe54dfb7b64b3fae2253f698be0ab55cf92c5cadda1098b15a7174b1d628c6c47"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-082764296e55a7ff489f5a7321cd4da61d26758ade62ab7f9755a7d8ebab903fe54dfb7b64b3fae2253f698be0ab55cf92c5cadda1098b15a7174b1d628c6c47"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-082764296e55a7ff489f5a7321cd4da61d26758ade62ab7f9755a7d8ebab903fe54dfb7b64b3fae2253f698be0ab55cf92c5cadda1098b15a7174b1d628c6c47"' :
                                        'id="xs-injectables-links-module-PostsModule-082764296e55a7ff489f5a7321cd4da61d26758ade62ab7f9755a7d8ebab903fe54dfb7b64b3fae2253f698be0ab55cf92c5cadda1098b15a7174b1d628c6c47"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-9053139fcd04722e48d8cae56822770620db1599287bb8be15ebd402ffc99bcb39443a2b90161c5bca7e69c43f50bfd04fc9045e9bbdcb765e7e02f7aba34bdb"' : 'data-bs-target="#xs-controllers-links-module-UserModule-9053139fcd04722e48d8cae56822770620db1599287bb8be15ebd402ffc99bcb39443a2b90161c5bca7e69c43f50bfd04fc9045e9bbdcb765e7e02f7aba34bdb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-9053139fcd04722e48d8cae56822770620db1599287bb8be15ebd402ffc99bcb39443a2b90161c5bca7e69c43f50bfd04fc9045e9bbdcb765e7e02f7aba34bdb"' :
                                            'id="xs-controllers-links-module-UserModule-9053139fcd04722e48d8cae56822770620db1599287bb8be15ebd402ffc99bcb39443a2b90161c5bca7e69c43f50bfd04fc9045e9bbdcb765e7e02f7aba34bdb"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-9053139fcd04722e48d8cae56822770620db1599287bb8be15ebd402ffc99bcb39443a2b90161c5bca7e69c43f50bfd04fc9045e9bbdcb765e7e02f7aba34bdb"' : 'data-bs-target="#xs-injectables-links-module-UserModule-9053139fcd04722e48d8cae56822770620db1599287bb8be15ebd402ffc99bcb39443a2b90161c5bca7e69c43f50bfd04fc9045e9bbdcb765e7e02f7aba34bdb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-9053139fcd04722e48d8cae56822770620db1599287bb8be15ebd402ffc99bcb39443a2b90161c5bca7e69c43f50bfd04fc9045e9bbdcb765e7e02f7aba34bdb"' :
                                        'id="xs-injectables-links-module-UserModule-9053139fcd04722e48d8cae56822770620db1599287bb8be15ebd402ffc99bcb39443a2b90161c5bca7e69c43f50bfd04fc9045e9bbdcb765e7e02f7aba34bdb"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDtoWithMeta.html" data-type="entity-link" >CreatePostDtoWithMeta</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});