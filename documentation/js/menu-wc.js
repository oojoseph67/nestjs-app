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
                                            'data-bs-target="#controllers-links-module-AppModule-bf59909b0fcec232ce766bb36614898b3e176a60a17495fd64bf04722a178e5b6f63b521b9b6ae7766374af5f013f0fdeaee1829d4efd412baf9d005618cbbd9"' : 'data-bs-target="#xs-controllers-links-module-AppModule-bf59909b0fcec232ce766bb36614898b3e176a60a17495fd64bf04722a178e5b6f63b521b9b6ae7766374af5f013f0fdeaee1829d4efd412baf9d005618cbbd9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-bf59909b0fcec232ce766bb36614898b3e176a60a17495fd64bf04722a178e5b6f63b521b9b6ae7766374af5f013f0fdeaee1829d4efd412baf9d005618cbbd9"' :
                                            'id="xs-controllers-links-module-AppModule-bf59909b0fcec232ce766bb36614898b3e176a60a17495fd64bf04722a178e5b6f63b521b9b6ae7766374af5f013f0fdeaee1829d4efd412baf9d005618cbbd9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-bf59909b0fcec232ce766bb36614898b3e176a60a17495fd64bf04722a178e5b6f63b521b9b6ae7766374af5f013f0fdeaee1829d4efd412baf9d005618cbbd9"' : 'data-bs-target="#xs-injectables-links-module-AppModule-bf59909b0fcec232ce766bb36614898b3e176a60a17495fd64bf04722a178e5b6f63b521b9b6ae7766374af5f013f0fdeaee1829d4efd412baf9d005618cbbd9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-bf59909b0fcec232ce766bb36614898b3e176a60a17495fd64bf04722a178e5b6f63b521b9b6ae7766374af5f013f0fdeaee1829d4efd412baf9d005618cbbd9"' :
                                        'id="xs-injectables-links-module-AppModule-bf59909b0fcec232ce766bb36614898b3e176a60a17495fd64bf04722a178e5b6f63b521b9b6ae7766374af5f013f0fdeaee1829d4efd412baf9d005618cbbd9"' }>
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
                                            'data-bs-target="#controllers-links-module-AuthModule-d4b6bb41f7657be5fcc55a585cf9f438f98423be01c742ec4f988be20b4c3bd58baae74d02d0b4cb675cc29c3fd22cd4275ca4c00fc88a8122d3092d9d412314"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-d4b6bb41f7657be5fcc55a585cf9f438f98423be01c742ec4f988be20b4c3bd58baae74d02d0b4cb675cc29c3fd22cd4275ca4c00fc88a8122d3092d9d412314"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-d4b6bb41f7657be5fcc55a585cf9f438f98423be01c742ec4f988be20b4c3bd58baae74d02d0b4cb675cc29c3fd22cd4275ca4c00fc88a8122d3092d9d412314"' :
                                            'id="xs-controllers-links-module-AuthModule-d4b6bb41f7657be5fcc55a585cf9f438f98423be01c742ec4f988be20b4c3bd58baae74d02d0b4cb675cc29c3fd22cd4275ca4c00fc88a8122d3092d9d412314"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-d4b6bb41f7657be5fcc55a585cf9f438f98423be01c742ec4f988be20b4c3bd58baae74d02d0b4cb675cc29c3fd22cd4275ca4c00fc88a8122d3092d9d412314"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-d4b6bb41f7657be5fcc55a585cf9f438f98423be01c742ec4f988be20b4c3bd58baae74d02d0b4cb675cc29c3fd22cd4275ca4c00fc88a8122d3092d9d412314"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-d4b6bb41f7657be5fcc55a585cf9f438f98423be01c742ec4f988be20b4c3bd58baae74d02d0b4cb675cc29c3fd22cd4275ca4c00fc88a8122d3092d9d412314"' :
                                        'id="xs-injectables-links-module-AuthModule-d4b6bb41f7657be5fcc55a585cf9f438f98423be01c742ec4f988be20b4c3bd58baae74d02d0b4cb675cc29c3fd22cd4275ca4c00fc88a8122d3092d9d412314"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-3ffe472b35a8e738a313d446dad3738877d424c568788a781331e7f2175630e8b53a4671aa133c60d0bf8bf68dfe2784904752f14d7fff1bf7565f6c10879f02"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-3ffe472b35a8e738a313d446dad3738877d424c568788a781331e7f2175630e8b53a4671aa133c60d0bf8bf68dfe2784904752f14d7fff1bf7565f6c10879f02"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-3ffe472b35a8e738a313d446dad3738877d424c568788a781331e7f2175630e8b53a4671aa133c60d0bf8bf68dfe2784904752f14d7fff1bf7565f6c10879f02"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-3ffe472b35a8e738a313d446dad3738877d424c568788a781331e7f2175630e8b53a4671aa133c60d0bf8bf68dfe2784904752f14d7fff1bf7565f6c10879f02"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-3ffe472b35a8e738a313d446dad3738877d424c568788a781331e7f2175630e8b53a4671aa133c60d0bf8bf68dfe2784904752f14d7fff1bf7565f6c10879f02"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-3ffe472b35a8e738a313d446dad3738877d424c568788a781331e7f2175630e8b53a4671aa133c60d0bf8bf68dfe2784904752f14d7fff1bf7565f6c10879f02"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-3ffe472b35a8e738a313d446dad3738877d424c568788a781331e7f2175630e8b53a4671aa133c60d0bf8bf68dfe2784904752f14d7fff1bf7565f6c10879f02"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-3ffe472b35a8e738a313d446dad3738877d424c568788a781331e7f2175630e8b53a4671aa133c60d0bf8bf68dfe2784904752f14d7fff1bf7565f6c10879f02"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-21f7746ea89d739721a303542f91de274c14212ced5f00874afe0db1ed08dbd5ac005b5e07b3085cb5947b27aecb7406a256f72589a2c9af7b870676ac8aad53"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-21f7746ea89d739721a303542f91de274c14212ced5f00874afe0db1ed08dbd5ac005b5e07b3085cb5947b27aecb7406a256f72589a2c9af7b870676ac8aad53"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-21f7746ea89d739721a303542f91de274c14212ced5f00874afe0db1ed08dbd5ac005b5e07b3085cb5947b27aecb7406a256f72589a2c9af7b870676ac8aad53"' :
                                            'id="xs-controllers-links-module-PostsModule-21f7746ea89d739721a303542f91de274c14212ced5f00874afe0db1ed08dbd5ac005b5e07b3085cb5947b27aecb7406a256f72589a2c9af7b870676ac8aad53"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-21f7746ea89d739721a303542f91de274c14212ced5f00874afe0db1ed08dbd5ac005b5e07b3085cb5947b27aecb7406a256f72589a2c9af7b870676ac8aad53"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-21f7746ea89d739721a303542f91de274c14212ced5f00874afe0db1ed08dbd5ac005b5e07b3085cb5947b27aecb7406a256f72589a2c9af7b870676ac8aad53"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-21f7746ea89d739721a303542f91de274c14212ced5f00874afe0db1ed08dbd5ac005b5e07b3085cb5947b27aecb7406a256f72589a2c9af7b870676ac8aad53"' :
                                        'id="xs-injectables-links-module-PostsModule-21f7746ea89d739721a303542f91de274c14212ced5f00874afe0db1ed08dbd5ac005b5e07b3085cb5947b27aecb7406a256f72589a2c9af7b870676ac8aad53"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-e7ced61fc61d80fc1aa238224b7167a557b610b26679ffd1e8eabc5b2b3586055e082c106974937f87732c1a6f66bbf568982a80f8f215b75bf1369a50d18544"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-e7ced61fc61d80fc1aa238224b7167a557b610b26679ffd1e8eabc5b2b3586055e082c106974937f87732c1a6f66bbf568982a80f8f215b75bf1369a50d18544"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-e7ced61fc61d80fc1aa238224b7167a557b610b26679ffd1e8eabc5b2b3586055e082c106974937f87732c1a6f66bbf568982a80f8f215b75bf1369a50d18544"' :
                                            'id="xs-controllers-links-module-TagsModule-e7ced61fc61d80fc1aa238224b7167a557b610b26679ffd1e8eabc5b2b3586055e082c106974937f87732c1a6f66bbf568982a80f8f215b75bf1369a50d18544"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-e7ced61fc61d80fc1aa238224b7167a557b610b26679ffd1e8eabc5b2b3586055e082c106974937f87732c1a6f66bbf568982a80f8f215b75bf1369a50d18544"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-e7ced61fc61d80fc1aa238224b7167a557b610b26679ffd1e8eabc5b2b3586055e082c106974937f87732c1a6f66bbf568982a80f8f215b75bf1369a50d18544"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-e7ced61fc61d80fc1aa238224b7167a557b610b26679ffd1e8eabc5b2b3586055e082c106974937f87732c1a6f66bbf568982a80f8f215b75bf1369a50d18544"' :
                                        'id="xs-injectables-links-module-TagsModule-e7ced61fc61d80fc1aa238224b7167a557b610b26679ffd1e8eabc5b2b3586055e082c106974937f87732c1a6f66bbf568982a80f8f215b75bf1369a50d18544"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-15cb4c9095585f0c5e8fae5e024b81880ad6e905d392701efbc4d52aad4d33b15e0f403c898d2700e08e1526d154fa202bd6c2277b4240fd4f95ff95c1dd0716"' : 'data-bs-target="#xs-controllers-links-module-UserModule-15cb4c9095585f0c5e8fae5e024b81880ad6e905d392701efbc4d52aad4d33b15e0f403c898d2700e08e1526d154fa202bd6c2277b4240fd4f95ff95c1dd0716"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-15cb4c9095585f0c5e8fae5e024b81880ad6e905d392701efbc4d52aad4d33b15e0f403c898d2700e08e1526d154fa202bd6c2277b4240fd4f95ff95c1dd0716"' :
                                            'id="xs-controllers-links-module-UserModule-15cb4c9095585f0c5e8fae5e024b81880ad6e905d392701efbc4d52aad4d33b15e0f403c898d2700e08e1526d154fa202bd6c2277b4240fd4f95ff95c1dd0716"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-15cb4c9095585f0c5e8fae5e024b81880ad6e905d392701efbc4d52aad4d33b15e0f403c898d2700e08e1526d154fa202bd6c2277b4240fd4f95ff95c1dd0716"' : 'data-bs-target="#xs-injectables-links-module-UserModule-15cb4c9095585f0c5e8fae5e024b81880ad6e905d392701efbc4d52aad4d33b15e0f403c898d2700e08e1526d154fa202bd6c2277b4240fd4f95ff95c1dd0716"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-15cb4c9095585f0c5e8fae5e024b81880ad6e905d392701efbc4d52aad4d33b15e0f403c898d2700e08e1526d154fa202bd6c2277b4240fd4f95ff95c1dd0716"' :
                                        'id="xs-injectables-links-module-UserModule-15cb4c9095585f0c5e8fae5e024b81880ad6e905d392701efbc4d52aad4d33b15e0f403c898d2700e08e1526d154fa202bd6c2277b4240fd4f95ff95c1dd0716"' }>
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
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
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
                                <a href="classes/CreateMetaOptionsDto.html" data-type="entity-link" >CreateMetaOptionsDto</a>
                            </li>
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
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
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