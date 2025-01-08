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
                                            'data-bs-target="#controllers-links-module-AppModule-76e0437957c309efb98994b4ae1ec7821063bfff84cf8f30daef0a6bf602900720e53924f3ce46789cd5859f076061fac295e45ce36719702c891e85b4c236bd"' : 'data-bs-target="#xs-controllers-links-module-AppModule-76e0437957c309efb98994b4ae1ec7821063bfff84cf8f30daef0a6bf602900720e53924f3ce46789cd5859f076061fac295e45ce36719702c891e85b4c236bd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-76e0437957c309efb98994b4ae1ec7821063bfff84cf8f30daef0a6bf602900720e53924f3ce46789cd5859f076061fac295e45ce36719702c891e85b4c236bd"' :
                                            'id="xs-controllers-links-module-AppModule-76e0437957c309efb98994b4ae1ec7821063bfff84cf8f30daef0a6bf602900720e53924f3ce46789cd5859f076061fac295e45ce36719702c891e85b4c236bd"' }>
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
                                        'data-bs-target="#injectables-links-module-AppModule-76e0437957c309efb98994b4ae1ec7821063bfff84cf8f30daef0a6bf602900720e53924f3ce46789cd5859f076061fac295e45ce36719702c891e85b4c236bd"' : 'data-bs-target="#xs-injectables-links-module-AppModule-76e0437957c309efb98994b4ae1ec7821063bfff84cf8f30daef0a6bf602900720e53924f3ce46789cd5859f076061fac295e45ce36719702c891e85b4c236bd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-76e0437957c309efb98994b4ae1ec7821063bfff84cf8f30daef0a6bf602900720e53924f3ce46789cd5859f076061fac295e45ce36719702c891e85b4c236bd"' :
                                        'id="xs-injectables-links-module-AppModule-76e0437957c309efb98994b4ae1ec7821063bfff84cf8f30daef0a6bf602900720e53924f3ce46789cd5859f076061fac295e45ce36719702c891e85b4c236bd"' }>
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
                                            'data-bs-target="#controllers-links-module-AuthModule-37a39549baaf75ddca46adf19bc1a8ca81bc5f54c49191b7e7c8d436d954c8cfb3ad898808e1213ddaa0c924ac321fdcd1757a0b21ce3c7b4d35db2f82fa505b"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-37a39549baaf75ddca46adf19bc1a8ca81bc5f54c49191b7e7c8d436d954c8cfb3ad898808e1213ddaa0c924ac321fdcd1757a0b21ce3c7b4d35db2f82fa505b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-37a39549baaf75ddca46adf19bc1a8ca81bc5f54c49191b7e7c8d436d954c8cfb3ad898808e1213ddaa0c924ac321fdcd1757a0b21ce3c7b4d35db2f82fa505b"' :
                                            'id="xs-controllers-links-module-AuthModule-37a39549baaf75ddca46adf19bc1a8ca81bc5f54c49191b7e7c8d436d954c8cfb3ad898808e1213ddaa0c924ac321fdcd1757a0b21ce3c7b4d35db2f82fa505b"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/GoogleAuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-37a39549baaf75ddca46adf19bc1a8ca81bc5f54c49191b7e7c8d436d954c8cfb3ad898808e1213ddaa0c924ac321fdcd1757a0b21ce3c7b4d35db2f82fa505b"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-37a39549baaf75ddca46adf19bc1a8ca81bc5f54c49191b7e7c8d436d954c8cfb3ad898808e1213ddaa0c924ac321fdcd1757a0b21ce3c7b4d35db2f82fa505b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-37a39549baaf75ddca46adf19bc1a8ca81bc5f54c49191b7e7c8d436d954c8cfb3ad898808e1213ddaa0c924ac321fdcd1757a0b21ce3c7b4d35db2f82fa505b"' :
                                        'id="xs-injectables-links-module-AuthModule-37a39549baaf75ddca46adf19bc1a8ca81bc5f54c49191b7e7c8d436d954c8cfb3ad898808e1213ddaa0c924ac321fdcd1757a0b21ce3c7b4d35db2f82fa505b"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GenerateTokenProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerateTokenProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GoogleAuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RefreshTokenProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefreshTokenProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileUploadModule.html" data-type="entity-link" >FileUploadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FileUploadModule-d3dd55a5020ceb6465356a03f20590832b981f6c74cefeff96d16cd49cd318fde8b90341ef69d3380b7d084b3b7b3c44a095cd95ded671d347f2a1acbe0864fa"' : 'data-bs-target="#xs-controllers-links-module-FileUploadModule-d3dd55a5020ceb6465356a03f20590832b981f6c74cefeff96d16cd49cd318fde8b90341ef69d3380b7d084b3b7b3c44a095cd95ded671d347f2a1acbe0864fa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FileUploadModule-d3dd55a5020ceb6465356a03f20590832b981f6c74cefeff96d16cd49cd318fde8b90341ef69d3380b7d084b3b7b3c44a095cd95ded671d347f2a1acbe0864fa"' :
                                            'id="xs-controllers-links-module-FileUploadModule-d3dd55a5020ceb6465356a03f20590832b981f6c74cefeff96d16cd49cd318fde8b90341ef69d3380b7d084b3b7b3c44a095cd95ded671d347f2a1acbe0864fa"' }>
                                            <li class="link">
                                                <a href="controllers/FileUploadController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileUploadController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FileUploadModule-d3dd55a5020ceb6465356a03f20590832b981f6c74cefeff96d16cd49cd318fde8b90341ef69d3380b7d084b3b7b3c44a095cd95ded671d347f2a1acbe0864fa"' : 'data-bs-target="#xs-injectables-links-module-FileUploadModule-d3dd55a5020ceb6465356a03f20590832b981f6c74cefeff96d16cd49cd318fde8b90341ef69d3380b7d084b3b7b3c44a095cd95ded671d347f2a1acbe0864fa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FileUploadModule-d3dd55a5020ceb6465356a03f20590832b981f6c74cefeff96d16cd49cd318fde8b90341ef69d3380b7d084b3b7b3c44a095cd95ded671d347f2a1acbe0864fa"' :
                                        'id="xs-injectables-links-module-FileUploadModule-d3dd55a5020ceb6465356a03f20590832b981f6c74cefeff96d16cd49cd318fde8b90341ef69d3380b7d084b3b7b3c44a095cd95ded671d347f2a1acbe0864fa"' }>
                                        <li class="link">
                                            <a href="injectables/FileUploadService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileUploadService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UploadToAwsProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadToAwsProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-d482e1cb0b6a8d98e7948851c459506b57b6cc05f740ef58c123a272093f21011e13b58f572bb510692f61cf9efe239f034ae42feb378724d91317067be4aba5"' : 'data-bs-target="#xs-injectables-links-module-MailModule-d482e1cb0b6a8d98e7948851c459506b57b6cc05f740ef58c123a272093f21011e13b58f572bb510692f61cf9efe239f034ae42feb378724d91317067be4aba5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-d482e1cb0b6a8d98e7948851c459506b57b6cc05f740ef58c123a272093f21011e13b58f572bb510692f61cf9efe239f034ae42feb378724d91317067be4aba5"' :
                                        'id="xs-injectables-links-module-MailModule-d482e1cb0b6a8d98e7948851c459506b57b6cc05f740ef58c123a272093f21011e13b58f572bb510692f61cf9efe239f034ae42feb378724d91317067be4aba5"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-e9204f2330879028037fd92bd7f144e5fbf269b00ee9b66c1eb1a6374ba45106fecdec23533c6ae183fcaa24e7176aa721f977f617f80999a3f57344410f9cff"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-e9204f2330879028037fd92bd7f144e5fbf269b00ee9b66c1eb1a6374ba45106fecdec23533c6ae183fcaa24e7176aa721f977f617f80999a3f57344410f9cff"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-e9204f2330879028037fd92bd7f144e5fbf269b00ee9b66c1eb1a6374ba45106fecdec23533c6ae183fcaa24e7176aa721f977f617f80999a3f57344410f9cff"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-e9204f2330879028037fd92bd7f144e5fbf269b00ee9b66c1eb1a6374ba45106fecdec23533c6ae183fcaa24e7176aa721f977f617f80999a3f57344410f9cff"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-e9204f2330879028037fd92bd7f144e5fbf269b00ee9b66c1eb1a6374ba45106fecdec23533c6ae183fcaa24e7176aa721f977f617f80999a3f57344410f9cff"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-e9204f2330879028037fd92bd7f144e5fbf269b00ee9b66c1eb1a6374ba45106fecdec23533c6ae183fcaa24e7176aa721f977f617f80999a3f57344410f9cff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-e9204f2330879028037fd92bd7f144e5fbf269b00ee9b66c1eb1a6374ba45106fecdec23533c6ae183fcaa24e7176aa721f977f617f80999a3f57344410f9cff"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-e9204f2330879028037fd92bd7f144e5fbf269b00ee9b66c1eb1a6374ba45106fecdec23533c6ae183fcaa24e7176aa721f977f617f80999a3f57344410f9cff"' }>
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
                                            'data-bs-target="#controllers-links-module-PostsModule-e0b7a892deaf702fbf4632a53edf77fd445d813982f6c88c40ca3820e844000b01614e3bbac3cb9b61405c69e779c314a99b04ff704a4da6a3bf8f462e8dafde"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-e0b7a892deaf702fbf4632a53edf77fd445d813982f6c88c40ca3820e844000b01614e3bbac3cb9b61405c69e779c314a99b04ff704a4da6a3bf8f462e8dafde"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-e0b7a892deaf702fbf4632a53edf77fd445d813982f6c88c40ca3820e844000b01614e3bbac3cb9b61405c69e779c314a99b04ff704a4da6a3bf8f462e8dafde"' :
                                            'id="xs-controllers-links-module-PostsModule-e0b7a892deaf702fbf4632a53edf77fd445d813982f6c88c40ca3820e844000b01614e3bbac3cb9b61405c69e779c314a99b04ff704a4da6a3bf8f462e8dafde"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-e0b7a892deaf702fbf4632a53edf77fd445d813982f6c88c40ca3820e844000b01614e3bbac3cb9b61405c69e779c314a99b04ff704a4da6a3bf8f462e8dafde"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-e0b7a892deaf702fbf4632a53edf77fd445d813982f6c88c40ca3820e844000b01614e3bbac3cb9b61405c69e779c314a99b04ff704a4da6a3bf8f462e8dafde"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-e0b7a892deaf702fbf4632a53edf77fd445d813982f6c88c40ca3820e844000b01614e3bbac3cb9b61405c69e779c314a99b04ff704a4da6a3bf8f462e8dafde"' :
                                        'id="xs-injectables-links-module-PostsModule-e0b7a892deaf702fbf4632a53edf77fd445d813982f6c88c40ca3820e844000b01614e3bbac3cb9b61405c69e779c314a99b04ff704a4da6a3bf8f462e8dafde"' }>
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
                                            'data-bs-target="#controllers-links-module-TagsModule-b1ab64edd1420fad0586640c3e17564fd744f57e310bfb25479956788a437fdc70e0e618a6ded144b3b3e3a2e6145190589e286db69fbe382c6b1d13beed0906"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-b1ab64edd1420fad0586640c3e17564fd744f57e310bfb25479956788a437fdc70e0e618a6ded144b3b3e3a2e6145190589e286db69fbe382c6b1d13beed0906"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-b1ab64edd1420fad0586640c3e17564fd744f57e310bfb25479956788a437fdc70e0e618a6ded144b3b3e3a2e6145190589e286db69fbe382c6b1d13beed0906"' :
                                            'id="xs-controllers-links-module-TagsModule-b1ab64edd1420fad0586640c3e17564fd744f57e310bfb25479956788a437fdc70e0e618a6ded144b3b3e3a2e6145190589e286db69fbe382c6b1d13beed0906"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-b1ab64edd1420fad0586640c3e17564fd744f57e310bfb25479956788a437fdc70e0e618a6ded144b3b3e3a2e6145190589e286db69fbe382c6b1d13beed0906"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-b1ab64edd1420fad0586640c3e17564fd744f57e310bfb25479956788a437fdc70e0e618a6ded144b3b3e3a2e6145190589e286db69fbe382c6b1d13beed0906"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-b1ab64edd1420fad0586640c3e17564fd744f57e310bfb25479956788a437fdc70e0e618a6ded144b3b3e3a2e6145190589e286db69fbe382c6b1d13beed0906"' :
                                        'id="xs-injectables-links-module-TagsModule-b1ab64edd1420fad0586640c3e17564fd744f57e310bfb25479956788a437fdc70e0e618a6ded144b3b3e3a2e6145190589e286db69fbe382c6b1d13beed0906"' }>
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
                                            'data-bs-target="#controllers-links-module-UserModule-e67e712127c61e581c9de985911a6e7df8974c358dc06632be2429082cbf115370fab43ab29c6c99a39ed7a5b7d79c7f9674478f47b78d165c0cd876b2103535"' : 'data-bs-target="#xs-controllers-links-module-UserModule-e67e712127c61e581c9de985911a6e7df8974c358dc06632be2429082cbf115370fab43ab29c6c99a39ed7a5b7d79c7f9674478f47b78d165c0cd876b2103535"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-e67e712127c61e581c9de985911a6e7df8974c358dc06632be2429082cbf115370fab43ab29c6c99a39ed7a5b7d79c7f9674478f47b78d165c0cd876b2103535"' :
                                            'id="xs-controllers-links-module-UserModule-e67e712127c61e581c9de985911a6e7df8974c358dc06632be2429082cbf115370fab43ab29c6c99a39ed7a5b7d79c7f9674478f47b78d165c0cd876b2103535"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-e67e712127c61e581c9de985911a6e7df8974c358dc06632be2429082cbf115370fab43ab29c6c99a39ed7a5b7d79c7f9674478f47b78d165c0cd876b2103535"' : 'data-bs-target="#xs-injectables-links-module-UserModule-e67e712127c61e581c9de985911a6e7df8974c358dc06632be2429082cbf115370fab43ab29c6c99a39ed7a5b7d79c7f9674478f47b78d165c0cd876b2103535"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-e67e712127c61e581c9de985911a6e7df8974c358dc06632be2429082cbf115370fab43ab29c6c99a39ed7a5b7d79c7f9674478f47b78d165c0cd876b2103535"' :
                                        'id="xs-injectables-links-module-UserModule-e67e712127c61e581c9de985911a6e7df8974c358dc06632be2429082cbf115370fab43ab29c6c99a39ed7a5b7d79c7f9674478f47b78d165c0cd876b2103535"' }>
                                        <li class="link">
                                            <a href="injectables/CreateUserProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserProvider</a>
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
                                <a href="classes/GetPostsBaseDto.html" data-type="entity-link" >GetPostsBaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsQueryDto.html" data-type="entity-link" >GetPostsQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GoogleTokenDto.html" data-type="entity-link" >GoogleTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MetaOption.html" data-type="entity-link" >MetaOption</a>
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
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tags.html" data-type="entity-link" >Tags</a>
                            </li>
                            <li class="link">
                                <a href="classes/Upload.html" data-type="entity-link" >Upload</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
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
                                    <a href="injectables/DataResponseInterceptor.html" data-type="entity-link" >DataResponseInterceptor</a>
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