class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      
      #INSTEAD OF SQL

      #In Rails, we use a DB-abstracted Ruby style for
      #creating table structure
      #This prevents us from needing to think about what the underlying DB 
      #even is; i.e. It would be easy to switch from one DB system to another if needed.

      #NO NEED to creat and 'id'. -it's so essential that Rails does it for us. 

      t.string   :name # a string tpye column called name STRING is generally shorter than TEXT
      t.text     :image_url #text is a bit longer, so suitable for longer entries
      t.float    :orbit    #we will record the orbit as a fraction of Earth's orbit. 
      t.float    :mass     # as a fraction of Earh's mass.
      t.integer  :moons   #whole number

      #you need to run migration to ensure this table exists

    end #end create table

  end  #end change method

end #end class CreatePlanets
