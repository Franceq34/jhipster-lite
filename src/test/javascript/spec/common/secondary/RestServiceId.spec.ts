import { Service } from '@/common/domain/Service';
import { toService } from '@/common/secondary/RestServiceId';

describe('RestServiceId', () => {
  it('should convert to Service', () => {
    expect(toService('aop-logging')).toEqual<Service>(Service.AOP_LOGGING);
    expect(toService('angular')).toEqual<Service>(Service.ANGULAR);
    expect(toService('angular-jwt')).toEqual<Service>(Service.ANGULAR_WITH_JWT);
    expect(toService('angular-oauth2')).toEqual<Service>(Service.ANGULAR_OAUTH2);
    expect(toService('dockerfile')).toEqual<Service>(Service.DOCKERFILE);
    expect(toService('download')).toEqual<Service>(Service.DOWNLOAD);
    expect(toService('flyway')).toEqual<Service>(Service.FLYWAY);
    expect(toService('flyway-user-and-authority-changelogs')).toEqual<Service>(Service.FLYWAY_WITH_USERS_AND_AUTHORITY_CHANGELOGS);
    expect(toService('frontend-maven-plugin')).toEqual<Service>(Service.FRONTEND_MAVEN_PLUGIN);
    expect(toService('init')).toEqual<Service>(Service.INITIALIZATION);
    expect(toService('jacoco-check-min-coverage')).toEqual<Service>(Service.JACOCO_CHECK_MINIMAL_COVERAGE);
    expect(toService('java-base')).toEqual<Service>(Service.JAVA_BASE);
    expect(toService('jib')).toEqual<Service>(Service.JIB);
    expect(toService('liquibase')).toEqual<Service>(Service.LIQUIBASE);
    expect(toService('liquibase-user-and-authority-changelogs')).toEqual<Service>(Service.LIQUIBASE_WITH_USERS_AND_AUTHORITY_CHANGELOGS);
    expect(toService('logstash')).toEqual<Service>(Service.LOGSTASH);
    expect(toService('mariadb')).toEqual<Service>(Service.MARIADB);
    expect(toService('maven-java')).toEqual<Service>(Service.MAVEN_JAVA);
    expect(toService('codespaces-setup')).toEqual<Service>(Service.CODESPACES_SETUP);
    expect(toService('gitpod-setup')).toEqual<Service>(Service.GITPOD_SETUP);
    expect(toService('mongodb')).toEqual<Service>(Service.MONGODB);
    expect(toService('mongock')).toEqual<Service>(Service.MONGOCK);
    expect(toService('mysql')).toEqual<Service>(Service.MYSQL);
    expect(toService('postgresql')).toEqual<Service>(Service.POSTGRESQL);
    expect(toService('sonar-java-backend')).toEqual<Service>(Service.SONAR_JAVA_BACKEND);
    expect(toService('sonar-java-backend-and-frontend')).toEqual<Service>(Service.SONAR_JAVA_BACKEND_AND_FRONTEND);
    expect(toService('springboot')).toEqual<Service>(Service.SPRINGBOOT);
    expect(toService('springboot-jwt')).toEqual<Service>(Service.SPRINGBOOT_JWT);
    expect(toService('springboot-jwt-basic-auth')).toEqual<Service>(Service.SPRINGBOOT_JWT_WITH_BASIC_AUTHENTICATION);
    expect(toService('springdoc-openapi-with-security-jwt')).toEqual<Service>(Service.SPRINGDOC_OPENAPI_WITH_SECURIITY_JWT);
    expect(toService('springboot-oauth2')).toEqual<Service>(Service.SPRINGBOOT_OAUTH2);
    expect(toService('springboot-oauth2-account')).toEqual<Service>(Service.SPRINGBOOT_OAUTH2_ACCOUNT);
    expect(toService('springboot-actuator')).toEqual<Service>(Service.SPRINGBOOT_ACTUATOR);
    expect(toService('springdoc-openapi')).toEqual<Service>(Service.SPRING_DOC);
    expect(toService('springboot-tomcat')).toEqual<Service>(Service.SPRINGBOOT_MVC_WITH_TOMCAT);
    expect(toService('springboot-undertow')).toEqual<Service>(Service.SPRINGBOOT_MVC_WITH_UNDERTOW);
    expect(toService('dummy-feature')).toEqual<Service>(Service.SPRINGBOOT_DUMMY_FEATURE);
    expect(toService('springboot-webflux-netty')).toEqual<Service>(Service.SPRINGBOOT_WEBFLUX_NETTY);
    expect(toService('springboot-cucumber')).toEqual<Service>(Service.SPRINGBOOT_CUCUMBER);
    expect(toService('springboot-pulsar')).toEqual<Service>(Service.SPRINGBOOT_PULSAR);
    expect(toService('springboot-async')).toEqual<Service>(Service.SPRINGBOOT_ASYNC);
    expect(toService('react')).toEqual<Service>(Service.REACT);
    expect(toService('react-styled')).toEqual<Service>(Service.REACT_STYLED);
    expect(toService('vue')).toEqual<Service>(Service.VUE);
    expect(toService('beer')).toEqual<Service>(Service.UNKNOWN);
  });
});
