class User < ApplicationRecord

    # Use the 'bcrypt' gem to encrypt passwords at the pont of creating a new pasword whenm cretaiong a new user objec--this will happen transparently, then we only store he encrypted version ('digest')
    #When we use this system the user will enter plain text, bbut it will be SAV ED in a field called 'password_digest'

    #User.create! email: 'user@ga.co', password: 'chicken' ---> password_digest '34653bnijb34k5ugh345g345'

    #don't allow a user to proceed without an email that is left blank
    validates :email, presence: true, uniqueness: true

    validates :name, length: {minimum: 2}
   
    has_secure_password



    has_many :mixtapes
end
