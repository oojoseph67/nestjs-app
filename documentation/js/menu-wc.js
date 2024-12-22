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
                                            'data-bs-target="#controllers-links-module-AppModule-9c9cafd77010de67657c552465846d0043e9dbfeb1ed4905431bdd12819653eae7a9cf68795d43ce2cf4a0c7ec36d556c1e1800b7a243b19f98da808275d2cae"' : 'data-bs-target="#xs-controllers-links-module-AppModule-9c9cafd77010de67657c552465846d0043e9dbfeb1ed4905431bdd12819653eae7a9cf68795d43ce2cf4a0c7ec36d556c1e1800b7a243b19f98da808275d2cae"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9c9cafd77010de67657c552465846d0043e9dbfeb1ed4905431bdd12819653eae7a9cf68795d43ce2cf4a0c7ec36d556c1e1800b7a243b19f98da808275d2cae"' :
                                            'id="xs-controllers-links-module-AppModule-9c9cafd77010de67657c552465846d0043e9dbfeb1ed4905431bdd12819653eae7a9cf68795d43ce2cf4a0c7ec36d556c1e1800b7a243b19f98da808275d2cae"' }>
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
                                        'data-bs-target="#injectables-links-module-AppModule-9c9cafd77010de67657c552465846d0043e9dbfeb1ed4905431bdd12819653eae7a9cf68795d43ce2cf4a0c7ec36d556c1e1800b7a243b19f98da808275d2cae"' : 'data-bs-target="#xs-injectables-links-module-AppModule-9c9cafd77010de67657c552465846d0043e9dbfeb1ed4905431bdd12819653eae7a9cf68795d43ce2cf4a0c7ec36d556c1e1800b7a243b19f98da808275d2cae"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9c9cafd77010de67657c552465846d0043e9dbfeb1ed4905431bdd12819653eae7a9cf68795d43ce2cf4a0c7ec36d556c1e1800b7a243b19f98da808275d2cae"' :
                                        'id="xs-injectables-links-module-AppModule-9c9cafd77010de67657c552465846d0043e9dbfeb1ed4905431bdd12819653eae7a9cf68795d43ce2cf4a0c7ec36d556c1e1800b7a243b19f98da808275d2cae"' }>
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
                                            'data-bs-target="#controllers-links-module-PostsModule-d356f497cf1b39c35a3f4aa487b0955e153a2fd366fb40b06ad833f53d4ff01a865a2b241dc557acba94be7f00f40a52b06a88acb23a189331ddc5e8d9aac043"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-d356f497cf1b39c35a3f4aa487b0955e153a2fd366fb40b06ad833f53d4ff01a865a2b241dc557acba94be7f00f40a52b06a88acb23a189331ddc5e8d9aac043"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-d356f497cf1b39c35a3f4aa487b0955e153a2fd366fb40b06ad833f53d4ff01a865a2b241dc557acba94be7f00f40a52b06a88acb23a189331ddc5e8d9aac043"' :
                                            'id="xs-controllers-links-module-PostsModule-d356f497cf1b39c35a3f4aa487b0955e153a2fd366fb40b06ad833f53d4ff01a865a2b241dc557acba94be7f00f40a52b06a88acb23a189331ddc5e8d9aac043"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-d356f497cf1b39c35a3f4aa487b0955e153a2fd366fb40b06ad833f53d4ff01a865a2b241dc557acba94be7f00f40a52b06a88acb23a189331ddc5e8d9aac043"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-d356f497cf1b39c35a3f4aa487b0955e153a2fd366fb40b06ad833f53d4ff01a865a2b241dc557acba94be7f00f40a52b06a88acb23a189331ddc5e8d9aac043"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-d356f497cf1b39c35a3f4aa487b0955e153a2fd366fb40b06ad833f53d4ff01a865a2b241dc557acba94be7f00f40a52b06a88acb23a189331ddc5e8d9aac043"' :
                                        'id="xs-injectables-links-module-PostsModule-d356f497cf1b39c35a3f4aa487b0955e153a2fd366fb40b06ad833f53d4ff01a865a2b241dc557acba94be7f00f40a52b06a88acb23a189331ddc5e8d9aac043"' }>
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
                                            'data-bs-target="#controllers-links-module-UserModule-0bcc4134ae0dddbae88a0d80df58155fb33a69ce811e1ba40814e59f8578617717909b9d6f968dac54c76f51097d69a80f79e668336603035aeb9f49b5c26f65"' : 'data-bs-target="#xs-controllers-links-module-UserModule-0bcc4134ae0dddbae88a0d80df58155fb33a69ce811e1ba40814e59f8578617717909b9d6f968dac54c76f51097d69a80f79e668336603035aeb9f49b5c26f65"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-0bcc4134ae0dddbae88a0d80df58155fb33a69ce811e1ba40814e59f8578617717909b9d6f968dac54c76f51097d69a80f79e668336603035aeb9f49b5c26f65"' :
                                            'id="xs-controllers-links-module-UserModule-0bcc4134ae0dddbae88a0d80df58155fb33a69ce811e1ba40814e59f8578617717909b9d6f968dac54c76f51097d69a80f79e668336603035aeb9f49b5c26f65"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-0bcc4134ae0dddbae88a0d80df58155fb33a69ce811e1ba40814e59f8578617717909b9d6f968dac54c76f51097d69a80f79e668336603035aeb9f49b5c26f65"' : 'data-bs-target="#xs-injectables-links-module-UserModule-0bcc4134ae0dddbae88a0d80df58155fb33a69ce811e1ba40814e59f8578617717909b9d6f968dac54c76f51097d69a80f79e668336603035aeb9f49b5c26f65"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-0bcc4134ae0dddbae88a0d80df58155fb33a69ce811e1ba40814e59f8578617717909b9d6f968dac54c76f51097d69a80f79e668336603035aeb9f49b5c26f65"' :
                                        'id="xs-injectables-links-module-UserModule-0bcc4134ae0dddbae88a0d80df58155fb33a69ce811e1ba40814e59f8578617717909b9d6f968dac54c76f51097d69a80f79e668336603035aeb9f49b5c26f65"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
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
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
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