using System.Xml.Serialization;

namespace ApiWithXML.Dto
{
    [XmlRoot("Hero")]
    public class SuperHeroDtoXML
    {
        [XmlElement("Name")]
        public string Name { get; set; }
        [XmlElement("FirstName")]
        public string FirstName { get; set; }
        [XmlElement("LastName")]
        public string LastName { get; set; }
        [XmlElement("Place")]
        public string Place { get; set; } 
    }
}
