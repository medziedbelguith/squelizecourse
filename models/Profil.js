module.exports=(sequelize,Datatype)=>{
    const Profil=sequelize.define("Profil",{
        firstname:{
            type:Datatype.STRING,
            allowNull:false
        },
        lastname:{
            type:Datatype.STRING,
            allowNull:false
        },
        country:{
            type:Datatype.STRING,
            allowNull:false
        },
        })
        Profil.associate=models=>{
            Profil.belongsTo(models.User,{
                onDelete:"cascade"
            })
        }
        return Profil
    }
