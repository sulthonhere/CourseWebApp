module.exports = (sequelize, DataTypes) => {
    const Media = sequelize.define('Media', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
        },

    }, {
        tableName: 'media',
    });
    
    return Media;
}