module.exports = (sequelize, DataTypes) => {
    const Media = sequelize.define('Media', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            filed: 'created_at',
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: {
            filed: 'updated_at',
            type: Sequelize.DATE,
            allowNull: false
        }
    }, {
        tableName: 'media'
    });

    return Media;
}