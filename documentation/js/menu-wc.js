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
                                            'data-bs-target="#controllers-links-module-AppModule-3039e3adf0db7f59697d6cfe963ec707495056497674c559198e1ba3e5a1f466e5323964e3469391a7141580aff9a961bf23382800a9eb6c944d805bb3b1b5b0"' : 'data-bs-target="#xs-controllers-links-module-AppModule-3039e3adf0db7f59697d6cfe963ec707495056497674c559198e1ba3e5a1f466e5323964e3469391a7141580aff9a961bf23382800a9eb6c944d805bb3b1b5b0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-3039e3adf0db7f59697d6cfe963ec707495056497674c559198e1ba3e5a1f466e5323964e3469391a7141580aff9a961bf23382800a9eb6c944d805bb3b1b5b0"' :
                                            'id="xs-controllers-links-module-AppModule-3039e3adf0db7f59697d6cfe963ec707495056497674c559198e1ba3e5a1f466e5323964e3469391a7141580aff9a961bf23382800a9eb6c944d805bb3b1b5b0"' }>
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
                                        'data-bs-target="#injectables-links-module-AppModule-3039e3adf0db7f59697d6cfe963ec707495056497674c559198e1ba3e5a1f466e5323964e3469391a7141580aff9a961bf23382800a9eb6c944d805bb3b1b5b0"' : 'data-bs-target="#xs-injectables-links-module-AppModule-3039e3adf0db7f59697d6cfe963ec707495056497674c559198e1ba3e5a1f466e5323964e3469391a7141580aff9a961bf23382800a9eb6c944d805bb3b1b5b0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3039e3adf0db7f59697d6cfe963ec707495056497674c559198e1ba3e5a1f466e5323964e3469391a7141580aff9a961bf23382800a9eb6c944d805bb3b1b5b0"' :
                                        'id="xs-injectables-links-module-AppModule-3039e3adf0db7f59697d6cfe963ec707495056497674c559198e1ba3e5a1f466e5323964e3469391a7141580aff9a961bf23382800a9eb6c944d805bb3b1b5b0"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaginationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-223ada169114a26b9de4eb1bc416f65605e6d064610d5c915bc6279faa961f8e9cfd5ac2e0e6a265ee287dbd31dfe98ae43a58239547b190263b34a57cd7e097"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-223ada169114a26b9de4eb1bc416f65605e6d064610d5c915bc6279faa961f8e9cfd5ac2e0e6a265ee287dbd31dfe98ae43a58239547b190263b34a57cd7e097"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-223ada169114a26b9de4eb1bc416f65605e6d064610d5c915bc6279faa961f8e9cfd5ac2e0e6a265ee287dbd31dfe98ae43a58239547b190263b34a57cd7e097"' :
                                            'id="xs-controllers-links-module-AuthModule-223ada169114a26b9de4eb1bc416f65605e6d064610d5c915bc6279faa961f8e9cfd5ac2e0e6a265ee287dbd31dfe98ae43a58239547b190263b34a57cd7e097"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-223ada169114a26b9de4eb1bc416f65605e6d064610d5c915bc6279faa961f8e9cfd5ac2e0e6a265ee287dbd31dfe98ae43a58239547b190263b34a57cd7e097"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-223ada169114a26b9de4eb1bc416f65605e6d064610d5c915bc6279faa961f8e9cfd5ac2e0e6a265ee287dbd31dfe98ae43a58239547b190263b34a57cd7e097"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-223ada169114a26b9de4eb1bc416f65605e6d064610d5c915bc6279faa961f8e9cfd5ac2e0e6a265ee287dbd31dfe98ae43a58239547b190263b34a57cd7e097"' :
                                        'id="xs-injectables-links-module-AuthModule-223ada169114a26b9de4eb1bc416f65605e6d064610d5c915bc6279faa961f8e9cfd5ac2e0e6a265ee287dbd31dfe98ae43a58239547b190263b34a57cd7e097"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GenerateTokenProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerateTokenProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RefreshTokenProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefreshTokenProvider</a>
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
                                <a href="modules/PaginationModule.html" data-type="entity-link" >PaginationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaginationModule-be844621f0666a6357e3b535e5e0868a747af8f7a3568833b5ad7333b59c04f97f89a53de7fb4436cb7eb4cad5b525bf52ac9018277917a1b8c2a73831201e7f"' : 'data-bs-target="#xs-injectables-links-module-PaginationModule-be844621f0666a6357e3b535e5e0868a747af8f7a3568833b5ad7333b59c04f97f89a53de7fb4436cb7eb4cad5b525bf52ac9018277917a1b8c2a73831201e7f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaginationModule-be844621f0666a6357e3b535e5e0868a747af8f7a3568833b5ad7333b59c04f97f89a53de7fb4436cb7eb4cad5b525bf52ac9018277917a1b8c2a73831201e7f"' :
                                        'id="xs-injectables-links-module-PaginationModule-be844621f0666a6357e3b535e5e0868a747af8f7a3568833b5ad7333b59c04f97f89a53de7fb4436cb7eb4cad5b525bf52ac9018277917a1b8c2a73831201e7f"' }>
                                        <li class="link">
                                            <a href="injectables/PaginationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-3383cd76256c40e52f02b57930eea83f96df0dba3661bcc51df0f2840225a441c8c29c1e509633922ee21be10b039b53d6c5aa44873190232f7c959bda056167"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-3383cd76256c40e52f02b57930eea83f96df0dba3661bcc51df0f2840225a441c8c29c1e509633922ee21be10b039b53d6c5aa44873190232f7c959bda056167"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-3383cd76256c40e52f02b57930eea83f96df0dba3661bcc51df0f2840225a441c8c29c1e509633922ee21be10b039b53d6c5aa44873190232f7c959bda056167"' :
                                            'id="xs-controllers-links-module-PostsModule-3383cd76256c40e52f02b57930eea83f96df0dba3661bcc51df0f2840225a441c8c29c1e509633922ee21be10b039b53d6c5aa44873190232f7c959bda056167"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-3383cd76256c40e52f02b57930eea83f96df0dba3661bcc51df0f2840225a441c8c29c1e509633922ee21be10b039b53d6c5aa44873190232f7c959bda056167"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-3383cd76256c40e52f02b57930eea83f96df0dba3661bcc51df0f2840225a441c8c29c1e509633922ee21be10b039b53d6c5aa44873190232f7c959bda056167"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-3383cd76256c40e52f02b57930eea83f96df0dba3661bcc51df0f2840225a441c8c29c1e509633922ee21be10b039b53d6c5aa44873190232f7c959bda056167"' :
                                        'id="xs-injectables-links-module-PostsModule-3383cd76256c40e52f02b57930eea83f96df0dba3661bcc51df0f2840225a441c8c29c1e509633922ee21be10b039b53d6c5aa44873190232f7c959bda056167"' }>
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
                                            'data-bs-target="#controllers-links-module-UserModule-0e02b3c2bafdefb0c7c39fd9b719cbc1333b1985d842533f4fc4e3273f166b050fdb4b45873adaa112f58bb826564c7d0c69dbbf7eb88215e112bbeb1cc62330"' : 'data-bs-target="#xs-controllers-links-module-UserModule-0e02b3c2bafdefb0c7c39fd9b719cbc1333b1985d842533f4fc4e3273f166b050fdb4b45873adaa112f58bb826564c7d0c69dbbf7eb88215e112bbeb1cc62330"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-0e02b3c2bafdefb0c7c39fd9b719cbc1333b1985d842533f4fc4e3273f166b050fdb4b45873adaa112f58bb826564c7d0c69dbbf7eb88215e112bbeb1cc62330"' :
                                            'id="xs-controllers-links-module-UserModule-0e02b3c2bafdefb0c7c39fd9b719cbc1333b1985d842533f4fc4e3273f166b050fdb4b45873adaa112f58bb826564c7d0c69dbbf7eb88215e112bbeb1cc62330"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-0e02b3c2bafdefb0c7c39fd9b719cbc1333b1985d842533f4fc4e3273f166b050fdb4b45873adaa112f58bb826564c7d0c69dbbf7eb88215e112bbeb1cc62330"' : 'data-bs-target="#xs-injectables-links-module-UserModule-0e02b3c2bafdefb0c7c39fd9b719cbc1333b1985d842533f4fc4e3273f166b050fdb4b45873adaa112f58bb826564c7d0c69dbbf7eb88215e112bbeb1cc62330"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-0e02b3c2bafdefb0c7c39fd9b719cbc1333b1985d842533f4fc4e3273f166b050fdb4b45873adaa112f58bb826564c7d0c69dbbf7eb88215e112bbeb1cc62330"' :
                                        'id="xs-injectables-links-module-UserModule-0e02b3c2bafdefb0c7c39fd9b719cbc1333b1985d842533f4fc4e3273f166b050fdb4b45873adaa112f58bb826564c7d0c69dbbf7eb88215e112bbeb1cc62330"' }>
                                        <li class="link">
                                            <a href="injectables/CreateUserProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserCreateMany.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserCreateMany</a>
                                        </li>
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
                                <a href="classes/CreateManyUsersDto.html" data-type="entity-link" >CreateManyUsersDto</a>
                            </li>
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
                                <a href="classes/GetPostsBaseDto.html" data-type="entity-link" >GetPostsBaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsQueryDto.html" data-type="entity-link" >GetPostsQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationQueryDto.html" data-type="entity-link" >PaginationQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BcryptProvider.html" data-type="entity-link" >BcryptProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingProvider.html" data-type="entity-link" >HashingProvider</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AccessTokenGuard.html" data-type="entity-link" >AccessTokenGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthenticationGuard.html" data-type="entity-link" >AuthenticationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Paginated.html" data-type="entity-link" >Paginated</a>
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