# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)


Sex.create(:name => 'Homme')
Sex.create(:name => 'Femme')

Title.create(:name => 'Monsieur')
Title.create(:name => 'Madame')
Title.create(:name => 'Mademoiselle')
Title.create(:name => 'Maitre')
Title.create(:name => 'Docteur')

Civilstatus.create(:name => 'Celibataire')
Civilstatus.create(:name => 'Marie')
Civilstatus.create(:name => 'Divorce')

Country.create(:name => 'Belgique')
Country.create(:name => 'France')
Country.create(:name => 'Luxembourg')
Country.create(:name => 'Pays-Bas')

Language.create(:name => 'Francais')
Language.create(:name => 'Neerlandais')
Language.create(:name => 'Anglais')
Language.create(:name => 'Luxembourgeois')

Nationality.create(:name => 'Belge')
Nationality.create(:name => 'Francais')
Nationality.create(:name => 'Luxembourgeois')
Nationality.create(:name => 'Neerlandais')

Category.create(:name => 'Auto RC')
Category.create(:name => 'Auto RC + Omnium')
Category.create(:name => 'Solde restant du')
Category.create(:name => 'Occupant voiture')
Category.create(:name => 'RC 2 roues + PJ')
Category.create(:name => 'RC prof. medic/paramedic')
Category.create(:name => 'Incendie')
Category.create(:name => 'Inc commerce')

Brand.create(:name => 'Axa 1', :category_id => 1)
Brand.create(:name => 'Axa 2', :category_id => 2)
Brand.create(:name => 'Axa 3', :category_id => 3)








