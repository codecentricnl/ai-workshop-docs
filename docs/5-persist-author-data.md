---
sidebar_position: 5
---

# Persist the Author data to the DB

For this step you will need to create classes and an interface in the data source section of the "clean hexagonal 
onion". Also, we need to create a DB migration script with liquibase to enable JPA for our Author entity

### Liquibase
add these lines to ``src/main/resources/application.properties``

```yaml
# DB Migration
spring.liquibase.change-log=classpath:db/db.changelog-master.xml
```
create the file ``src/main/resources/db/db.changelog-master.xml`` with content

```xml
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-latest.xsd">
    <include file="changelog/01_create_author_seq.xml" relativeToChangelogFile="true"/>
    <include file="changelog/02_add_author.xml" relativeToChangelogFile="true"/>
</databaseChangeLog>
```

create the file ``src/main/resources/db/changelog/01_create_author_seq.xml`` with content

```xml
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.6.xsd">

    <changeSet id="01-create-author-sequence" author="Maik Kingma">
        <comment>Create Author sequence</comment>
        <createSequence sequenceName="author_seq" minValue="10001"/>
    </changeSet>
</databaseChangeLog>
```

create file src/main/resources/db/changelog/02_create_author_table.xml with content

```xml
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.6.xsd">

    <changeSet id="01-create-author-table" author="Maik Kingma">
        <comment>Create author table</comment>

        <createTable tableName="author">
            <column name="id" type="bigint">
                <constraints primaryKey="true" primaryKeyName="author_id_pk" nullable="false"/>
            </column>
            <column name="first_name" type="text">
                <constraints nullable="false"/>
            </column>
            <column name="last_name" type="text">
                <constraints nullable="false"/>
            </column>
        </createTable>
    </changeSet>
</databaseChangeLog>
```



DONE! Let's move on to the next topic: **Querying our Domain**.





