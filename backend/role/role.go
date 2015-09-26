package role

import (
  "errors"
)
type RoleType uint8

const (
	Admin RoleType = iota
	WholeSaler
	Retailor
	Collector
	Fisher
)

type Role struct {
	role RoleType
}

func GetRole(name string) *Role, error {
role := Role{} 
}
func (r *Role) setRole(name string) error{
	switch name {
	case "wholesaler":
    r.role= WholeSaler
    return nil
  case "retailer":
    r.role = Retailor
    return nil
  case "collector":
    r.role = Collector
    return nil
  case "fisher":
    r.role = Fisher
    return nil
  case "admin":
      return nil
	}
  return errors.New("Unknown Role Error")
}

func (r *Role) isAdmin() bool {
	if r.Type == Admin {
		return true
	}
	return false
}
